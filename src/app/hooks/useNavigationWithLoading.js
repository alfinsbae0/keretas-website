"use client";

import { useRouter } from "next/navigation";
import { useNavigation } from "../components/navigation-provider";

export function useNavigationWithLoading() {
  const router = useRouter();
  const { setIsLoading } = useNavigation();

  const navigateTo = (path, options = {}) => {
    setIsLoading(true);

    // Add small delay for UX
    setTimeout(() => {
      router.push(path, options);
    }, 100);
  };

  const navigateBack = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.back();
    }, 100);
  };

  const navigateForward = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.forward();
    }, 100);
  };

  return {
    navigateTo,
    navigateBack,
    navigateForward,
    push: navigateTo,
    back: navigateBack,
    forward: navigateForward,
  };
}
