import styled from "styled-components"

export const FriendsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FriendsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: 40px auto;
  font-family: "Playfair Display", serif;
`

export const FriendWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 5px auto;
  border-bottom: 1px solid #8dbfb7;
  border-left: 1px solid #8dbfb7;
  padding: 10px;
`

export const FriendInfo = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 1.7;

  span {
    font-weight: bold;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  i {
    margin: 0 10px;
    font-size: 2.2rem;
    color: #8dbfb7;
  }
`
