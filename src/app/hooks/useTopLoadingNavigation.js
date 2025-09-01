"use client";

import { useRouter } from "next/navigation";
import { useTopLoading } from "../components/top-loading-provider";

export function useTopLoadingNavigation() {
  const router = useRouter();
  const { startLoading } = useTopLoading();

  const navigateTo = (path, options = {}) => {
    startLoading();
    router.push(path, options);
  };

  const navigateBack = () => {
    startLoading();
    router.back();
  };

  const navigateForward = () => {
    startLoading();
    router.forward();
  };

  const replace = (path, options = {}) => {
    startLoading();
    router.replace(path, options);
  };

  return {
    navigateTo,
    navigateBack,
    navigateForward,
    replace,
    push: navigateTo,
    back: navigateBack,
    forward: navigateForward,
  };
}
