import React from 'react';
import SectionHeader from '../section-header';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';
import './style.scss';

const TMISection = ({}) => {
  return (
    <div className="tmi-section-wrapper">
    <div className="tmi-section">
      
      <div className="body">
          <div className="front">
          <hr/>
            <p>위대해지고 싶은 것</p>
            <p>그것은 누구나</p>
            <p>마음 속 간직한 욕망이 아닐까 싶습니다.</p>
            <br/>
            <br/>
            <p>한낱 일기장으로 치부할 수도 있을</p>
            <p>나의 흔적, 나의 자취들이</p>
            <p>어느 한 사람의 마음 한 켠에서라도</p>
            <p>흐뭇해지기를 소망하는 바입니다.</p>
          </div>

          <div className="bbomi">
            <SectionHeader title="Just watch my BBomi" />

            <div className="bbomi-gal">
              
                <Image
                    className="thumbnail"
                    src={"bbomi/pm03.jpg"}
                    alt={"bbomi/pm03.jpg"}
                  />
                <Image
                    className="thumbnail"
                    src={"bbomi/pm02.jpg"}
                    alt={"bbomi/pm02.jpg"}
                  />
                <Image
                    className="thumbnail"
                    src={"bbomi/pm01.jpg"}
                    alt={"bbomi/pm01.jpg"}
                  />
                <Image
                  className="thumbnail"
                  src={"bbomi/pm04.jpg"}
                  alt={"bbomi/pm04.jpg"}
                />
                <Image
                  className="thumbnail"
                  src={"bbomi/pm05.jpg"}
                  alt={"bbomi/pm05.jpg"}
                />
                <Image
                  className="thumbnail"
                  src={"bbomi/pm06.jpg"}
                  alt={"bbomi/pm06.jpg"}
                />
                <Image
                  className="thumbnail"
                  src={"bbomi/pm07.jpg"}
                  alt={"bbomi/pm07.jpg"}
                />
            </div>
            <p> BBomi's moment of my Precious </p>   
          </div>
          
          <div className="back">
            <p>권도일이라고 하는 사람이올시다</p>
            <p>See a <a href="https://blog.naver.com/kdi3939">my Naver Blog</a> hosted on Naver.</p>
          </div>
          
      </div>
    </div>
  </div>
  );
};

export default TMISection;
