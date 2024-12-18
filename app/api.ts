import {
  DetailUser,
  PostData,
  Posts,
  TimeLineData,
  Topic,
  TopicData,
  Users,
} from "./types";

//タイムラインの投稿の取得
//認証終わったらAPI叩けるはず
export const fetchTimeline = async (): Promise<TimeLineData> => {
  const res = await fetch(
    "https://wara-back-qr9q.onrender.com/api/user/posts",
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const Timeline = await res.json();
  return Timeline;
};

//ユーザーの獲得いいね数ランキングを取ってくる
export const fetchAllUserRanking = async (): Promise<Users> => {
  const res = await fetch(
    "https://wara-back-qr9q.onrender.com/api/user/users",
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const UsersRanking = await res.json();
  return UsersRanking;
};

//自分のユーザー情報を取ってくる
export const fetchMyUser = async (): Promise<DetailUser> => {
  const res = await fetch(
    "https://wara-back-qr9q.onrender.com/api/user/mypage",
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const MyUser = res.json();
  return MyUser;
};

//自分の投稿の情報を取ってくる
export const fetchMyPosts = async (): Promise<Posts> => {
  const res = await fetch(
    "https://wara-back-qr9q.onrender.com/api/user/myposts",
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const MyPosts = res.json();
  return MyPosts;
};

//特定のユーザーのユーザー情報を取ってくる
export const fetchDetailUser = async (id: number): Promise<DetailUser> => {
  const res = await fetch(
    `https://wara-back-qr9q.onrender.com/api/user/otherUser/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const DetailUser = res.json();
  return DetailUser;
};

//特定のユーザーの投稿を取ってくる
export const fetchUserPosts = async (id: number): Promise<Posts> => {
  const res = await fetch(
    `https://wara-back-qr9q.onrender.com/api/user/otherUserPosts/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const UserPosts = res.json();
  return UserPosts;
};

//最新のお題を取ってくる
export const fetchLatestTopic = async (): Promise<TopicData> => {
  const res = await fetch(
    `https://wara-back-qr9q.onrender.com/api/user/topic`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const Topic = res.json();
  return Topic;
};

//特定のお題を取ってくる
export const fetchDetailTopic = async (id: number): Promise<TopicData> => {
  const res = await fetch(
    `https://wara-back-qr9q.onrender.com/api/user/topic/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const Topic = res.json();
  return Topic;
};

//特定の投稿を取ってくる
export const fetchDetailPost = async (
  id: number,
  token: string
): Promise<PostData> => {
  const res = await fetch(
    `https://wara-back-qr9q.onrender.com/api/user/posts/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );
  const Post = res.json();
  return Post;
};

export const getAllPosts = async (): Promise<Posts[]> => {
  const res = await fetch("https://wara-back-qr9q.onrender.com/post", {
    cache: "no-store",
  });
  const AllPosts = res.json();

  return AllPosts;
};

export const IncrementHeartPoints = async (id: number): Promise<void> => {
  String(id);
  const res = await fetch(`https://wara-back-qr9q.onrender.com/post/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const DecrementHeartPoints = async (id: number): Promise<void> => {
  String(id);
  const res = await fetch(`https://wara-back-qr9q.onrender.com/post/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
