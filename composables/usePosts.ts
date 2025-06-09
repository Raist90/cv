export async function usePosts() {
  return await queryCollection("content").order("date", "DESC").all();
}

export type Post = Awaited<ReturnType<typeof usePosts>>[number];
