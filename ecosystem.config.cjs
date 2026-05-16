module.exports = {
  apps: [
    {
      name: "amanpal-portfolio",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
