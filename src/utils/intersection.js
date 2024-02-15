import { onMounted } from "vue";
import { get } from "@vueuse/core";

export const useIntersection = (target, callback) => {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
              callback();
            }
          }
        });
      },
      {
        root: null, // observing intersections relative to the viewport
        threshold: 0.5, // trigger when 50% of the target is visible
      }
    );

    const targetVal = get(target);
    if (targetVal) {
      observer.observe(targetVal);
    }

    return () => {
      const targetVal = get(target);
      if (targetVal) {
        observer.unobserve(targetVal);
      }
    };
  });
};
