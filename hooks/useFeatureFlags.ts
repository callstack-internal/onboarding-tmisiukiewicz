import featureFlags from "../utils/featureFlags";

const useFeatureFlags = (flag: keyof typeof featureFlags) => {
  return featureFlags[flag];
};

export default useFeatureFlags;
