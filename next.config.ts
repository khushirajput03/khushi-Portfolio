import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "cdn3d.iconscout.com",
      "static.vecteezy.com",
      "uxwing.com",
      "git-scm.com",
    ],
  },
  // other config options here
};

export default withSentryConfig(nextConfig, {
  org: "vision-c4",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  disableLogger: true,
  automaticVercelMonitors: true,
});
