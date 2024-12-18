"use client";
import React, { useEffect, useState } from "react";
import TimeLine from "../components/TimeLine";
import BottomAppBar from "../components/BottomAppBar";
import Title from "../components/Title";
import { TimeLineData, Topic, TopicData } from "../types";
import { RecentTopic } from "../posts/page";

const Page = () => {
  const [timeline, setTimeline] = useState<TimeLineData | undefined>(undefined);
  const [topic, setTopic] = useState<RecentTopic | undefined>(undefined);

  useEffect(() => {
    const fetchLatestTopic = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const res = await fetch(
          `https://wara-back-qr9q.onrender.com/api/user/recent`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const Topic: RecentTopic = await res.json();
        setTopic(Topic);
      } else {
      }
    };

    const fetchTimeline = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not found");
        return;
      }

      try {
        const res = await fetch(
          "https://wara-back-qr9q.onrender.com/api/user/posts",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch timeline data");
        }

        const data: TimeLineData = await res.json();
        setTimeline(data);
      } catch (error) {
        console.error("Error fetching timeline data:", error);
      }
    };

    fetchLatestTopic();
    fetchTimeline();
  }, []);

  if (!topic) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Title topic={topic?.topic} image={topic?.topic_image} />
      {timeline && <TimeLine post={timeline.post} />}
      <BottomAppBar />
    </div>
  );
};

export default Page;
