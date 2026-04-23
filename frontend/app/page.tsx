"use client";

import { useState } from "react";
import { createSecret } from "../services/api";
import { Copy, Check, Clock, Shield } from "lucide-react";

export default function Home() {
  const [text, setText] = useState<string>("");
  const [ttl, setTtl] = useState<number>(300);
  const [link, setLink] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!text.trim()) return;

    setLoading(true);
    try {
      const data = await createSecret(text, ttl);
      setLink(data.url);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const ttlOptions = [
    { value: 60, label: "1 minute" },
    { value: 300, label: "5 minutes" },
    { value: 3600, label: "1 hour" },
    { value: 86400, label: "24 hours" },
    { value: 604800, label: "7 days" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-2xl mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Secure Credential Drop</h1>
          <p className="text-slate-500 mt-2">Share sensitive information securely with expiring links</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Secret Content
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your secret text, password, or sensitive information..."
                className="w-full h-32 px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none resize-none text-slate-900 placeholder:text-slate-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <Clock className="w-4 h-4 inline mr-1" />
                Expiration Time
              </label>
              <select
                value={ttl}
                onChange={(e) => setTtl(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none bg-white text-slate-900 transition-all appearance-none cursor-pointer"
              >
                {ttlOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleCreate}
              disabled={!text.trim() || loading}
              className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Shield className="w-5 h-5 mr-2" />
                  Create Secure Link
                </>
              )}
            </button>
          </div>

          {link && (
            <div className="mt-6 pt-6 border-t border-slate-200">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Share this secure link
              </label>
              <div className="flex items-center gap-2">
                <div className="flex-1 px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                  <p className="text-sm text-slate-600 truncate font-mono">{link}</p>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="w-5 h-5 text-slate-600" />
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                This link will self-destruct after being viewed once
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}