export interface NavLink {
  imgURL: string;
  route: string;
  label: string;
}

export interface UpdateUser {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
}

export interface NewPost {
  userId: string;
  caption: string;
  file: File[];
  location?: string;
  tags?: string;
}

export interface UpdatePost {
  postId: string;
  caption: string;
  imageId: string;
  imageUrl: URL;
  file: File[];
  location?: string;
  tags?: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  bio: string;
}

export interface NewUser {
  name: string;
  email: string;
  username: string;
  password: string;
}
