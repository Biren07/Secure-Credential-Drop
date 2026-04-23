export default function botProtection(req, res, next) {
  const ua = req.headers["user-agent"] || "";

  const blocked = ["bot", "crawler", "spider", "preview"];

  if (blocked.some(b => ua.toLowerCase().includes(b))) {
    return res.status(403).json({ message: "Bots are blocked" });
  }

  next();
}