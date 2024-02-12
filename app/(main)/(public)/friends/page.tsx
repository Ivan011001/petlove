import Title from "@/components/title";
import { axiosInstance } from "@/services";
import { IFriends } from "@/types/friends";
import FriendsList from "./_components/friends-list";
import PageContainer from "@/components/ui/page-container";

const getAllFriends = async (): Promise<{
  data: IFriends[];
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
    <PageContainer>
      <Title>Our friends</Title>
      <FriendsList friends={friends} />
    </PageContainer>
  );
};

export default FriendsPage;
