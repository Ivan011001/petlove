import Title from "@/components/title";
import { axiosInstance } from "@/services";
import { IFriend } from "@/types";
import FriendsList from "./_components/friends-list";

const getAllFriends = async (): Promise<{
  data: IFriend[];
}> => {
  try {
    const response = await axiosInstance.get("/friends");
    return response;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};

const FriendsPage = async () => {
  const { data: friends } = await getAllFriends();
  return (
    <>
      <Title>Our friends</Title>
      <FriendsList friends={friends} />
    </>
  );
};

export default FriendsPage;
