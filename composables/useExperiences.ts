export async function useExperiences() {
  return (await queryCollection("experience").first())?.experiences || [];
}

export type Experience = Awaited<ReturnType<typeof useExperiences>>[number];
