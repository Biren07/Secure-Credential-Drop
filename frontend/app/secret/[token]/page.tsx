"use client";

import { useEffect, useState, use } from "react";
import { getSecret } from "../../../services/api";
import { Key, AlertTriangle, Eye, Copy, Check } from "lucide-react";

interface Props {
  params: {
    token: string;
  };
}

export default function SecretPage({ params }: Props) {
  const [secret, setSecret] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const { token } = use(params);

  useEffect(() => {
    const fetchSecret = async () => {
      setLoading(true);
      try {
        const data = await getSecret(token);

        if (data.text) {
          setSecret(data.text);
        } else {
          setError(data.message || "This secret has expired or already been viewed");
        }
      } catch {
        setError("Failed to load secret");
      } finally {
        setLoading(false);
      }
    };

    fetchSecret();
  }, [token]);

  const handleCopy = () => {
    navigator.clipboard.writeText(secret);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-slate-200 border-t-slate-900 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-500">Decrypting secret...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${error ? 'bg-amber-100' : 'bg-green-100'}`}>
            {error ? (
              <AlertTriangle className="w-8 h-8 text-amber-600" />
            ) : (
              <Key className="w-8 h-8 text-green-600" />
            )}
          </div>
          <h1 className="text-3xl font-bold text-slate-900">
            {error ? "Secret Unavailable" : "Secret Revealed"}
          </h1>
          <p className="text-slate-500 mt-2">
            {error ? "This link has already been used or expired" : "Copy this secret before leaving"}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
          {error ? (
            <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <p className="text-amber-800 text-sm">{error}</p>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <Eye className="w-4 h-4 inline mr-1" />
                Decrypted Secret
              </label>
              <div className="relative">
                <div className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-sm text-slate-900 break-all min-h-[100px]">
                  {secret}
                </div>
                <button
                  onClick={handleCopy}
                  className="absolute top-3 right-3 p-2 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 shadow-sm transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-600" />
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-3 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                This secret is now deleted and cannot be viewed again
              </p>
            </div>
          )}

          <a
            href="/"
            className="mt-6 block w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-all text-center"
          >
            Create New Secret
          </a>
        </div>
      </div>
    </div>
  );
}