module.exports = {
  api: {
    port: 3001,
    root: "/api",
  },

  frontEnd: {
    domain: "http://localhost:4200",
  },

  auth: {
    jwt: {
      secret: "jwt_secret",
      expiresIn: "24h",
    },
    resetPassword: {
      secret: "reset_password_secret",
      ttl: 86400 * 1000, // 1 day
      algorithm: "aes256",
      inputEncoding: "utf8",
      outputEncoding: "hex",
    },
  },

  db: {
    url: "mongodb://127.0.0.1:27017/swachh-bharat",
    name: "swachh-bharat",
  },

  logger: {
    console: {
      level: "debug",
    },
    file: {
      logDir: "logs",
      logFile: "bundle_node.log",
      level: "debug",
      maxsize: 1024 * 1024 * 10, // 10MB
      maxFiles: 5,
    },
  },

  uploads: {
    file_path: "uploads",
    domain: `http://localhost:`,
  },
};
