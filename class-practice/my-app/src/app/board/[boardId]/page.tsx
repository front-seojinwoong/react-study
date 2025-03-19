"use client";

import { formatDate } from "@/commons/utils";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
    }
  }
`;

const DetailBoard = () => {
  const { boardId } = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId },
  });

  return (
    <>
      <h2 className='onT1'>{data?.fetchBoard.title}</h2>
      <div className='onFlexBox hasLine stretch'>
        <div className='userThumb'>
          {/* <img src={icoUser} alt='유저썸네일' /> */}
          <Image
            src='/images/ico_user.svg'
            width={0}
            height={0}
            sizes='100vw'
            alt='썸네일이미지'
          />
          <span className='text_gray_5f'>{data?.fetchBoard.writer}</span>
        </div>
        <p className='datetime text_gray_81'>
          {formatDate(data?.fetchBoard.createdAt)}
        </p>
      </div>
      <div className='boardDetailBox'>
        <div className='ta-r'>
          <button className='utilIcon'>
            {/* <img src={icoShare} alt='공유하기' /> */}
            <Image
              src='/images/ico_share.svg'
              width={0}
              height={0}
              sizes='100vw'
              alt='공유하기'
            />
          </button>
          <button className='utilIcon'>
            {/* <img src={icoLocation} alt='위치확인하기' /> */}
            <Image
              src='/images/ico_location.svg'
              width={0}
              height={0}
              sizes='100vw'
              alt='위치확인하기'
            />
          </button>
        </div>
        <div className='txtBox'>{data?.fetchBoard.contents}</div>
      </div>
    </>
  );
};

export default DetailBoard;
