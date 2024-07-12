export interface Details {
    id?: string;
    title: string;
    description: string;
    subtitle?: string;
    slug: string;
    created?: number;
    seo?: string;
    picture: string;
    author: { name: string; picture: string };
};

export interface BlogInterface {
  getPostList(): Promise<Details[]>;
  getPost(slug: string): Promise<Details>;
}
