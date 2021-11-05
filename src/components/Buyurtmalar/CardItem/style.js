import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 6px;
  padding: 0 47px 0 18px;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);

  &:hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }

  & > p {
    flex: 1;
  }
`;

ItemContainer.Title = styled.p``;
ItemContainer.Logo = styled.img`
  margin-right: 28px;
`;

ItemContainer.Category = styled.p``;
ItemContainer.Price = styled.p``;
ItemContainer.AdditionalInfo = styled.p``;

ItemContainer.Icons = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #edeff3;
    border-radius: 22.4px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: #ffffff;
      box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
      border-radius: 16px;

      Path,
      Delete {
        cursor: pointer;
      }
    }

    &:first-child {
      margin-right: 23px;
    }
  }
`;
