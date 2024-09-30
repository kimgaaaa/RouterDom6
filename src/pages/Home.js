import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <h1>책을 사랑하는 마음, 북스리브로</h1>
            <div className="home-book-wrap">
                <ul>
                    <li className='item'>
                        <Link to="">
                            <img src={process.env.PUBLIC_URL+ '/img/main01.jpg'} alt="" />
                            <span>꽃길이 따로 있나 내 삶이 꽃인 것을 지은이: 오평선 편행본: 포레스트북스 가격: 16800원 인생 후반을...</span>
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to="">
                            <img src={process.env.PUBLIC_URL+ '/img/main02.jpg'} alt="" />
                            <span>꽃길이 따로 있나 내 삶이 꽃인 것을 지은이: 오평선 편행본: 포레스트북스 가격: 16800원 인생 후반을...</span>
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to="">
                            <img src={process.env.PUBLIC_URL+ '/img/main03.jpg'} alt="" />
                            <span>꽃길이 따로 있나 내 삶이 꽃인 것을 지은이: 오평선 편행본: 포레스트북스 가격: 16800원 인생 후반을...</span>
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to="">
                            <img src={process.env.PUBLIC_URL+ '/img/main04.jpg'} alt="" />
                            <span>꽃길이 따로 있나 내 삶이 꽃인 것을 지은이: 오평선 편행본: 포레스트북스 가격: 16800원 인생 후반을...</span>
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to="">
                            <img src={process.env.PUBLIC_URL+ '/img/main05.jpg'} alt="" />
                            <span>꽃길이 따로 있나 내 삶이 꽃인 것을 지은이: 오평선 편행본: 포레스트북스 가격: 16800원 인생 후반을...</span>
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to="">
                            <img src={process.env.PUBLIC_URL+ '/img/main06.jpg'} alt="" />
                            <span>꽃길이 따로 있나 내 삶이 꽃인 것을 지은이: 오평선 편행본: 포레스트북스 가격: 16800원 인생 후반을...</span>
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to="">
                            <img src={process.env.PUBLIC_URL+ '/img/main07.jpg'} alt="" />
                            <span>꽃길이 따로 있나 내 삶이 꽃인 것을 지은이: 오평선 편행본: 포레스트북스 가격: 16800원 인생 후반을...</span>
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to="">
                            <img src={process.env.PUBLIC_URL+ '/img/main08.jpg'} alt="" />
                            <span>꽃길이 따로 있나 내 삶이 꽃인 것을 지은이: 오평선 편행본: 포레스트북스 가격: 16800원 인생 후반을...</span>
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to="">
                            <img src={process.env.PUBLIC_URL+ '/img/main09.jpg'} alt="" />
                            <span>꽃길이 따로 있나 내 삶이 꽃인 것을 지은이: 오평선 편행본: 포레스트북스 가격: 16800원 인생 후반을...</span>
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to="">
                            <img src={process.env.PUBLIC_URL+ '/img/main10.jpg'} alt="" />
                            <span>꽃길이 따로 있나 내 삶이 꽃인 것을 지은이: 오평선 편행본: 포레스트북스 가격: 16800원 인생 후반을...</span>
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to="">
                            <img src={process.env.PUBLIC_URL+ '/img/main11.jpg'} alt="" />
                            <span>꽃길이 따로 있나 내 삶이 꽃인 것을 지은이: 오평선 편행본: 포레스트북스 가격: 16800원 인생 후반을...</span>
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to="">
                            <img src={process.env.PUBLIC_URL+ '/img/main12.jpg'} alt="" />
                            <span>꽃길이 따로 있나 내 삶이 꽃인 것을 지은이: 오평선 편행본: 포레스트북스 가격: 16800원 인생 후반을...</span>
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to="">
                            <img src={process.env.PUBLIC_URL+ '/img/main13.jpg'} alt="" />
                            <span>꽃길이 따로 있나 내 삶이 꽃인 것을 지은이: 오평선 편행본: 포레스트북스 가격: 16800원 인생 후반을...</span>
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to="">
                            <img src={process.env.PUBLIC_URL+ '/img/main14.jpg'} alt="" />
                            <span>꽃길이 따로 있나 내 삶이 꽃인 것을 지은이: 오평선 편행본: 포레스트북스 가격: 16800원 인생 후반을...</span>
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to="">
                            <img src={process.env.PUBLIC_URL+ '/img/main15.jpg'} alt="" />
                            <span>꽃길이 따로 있나 내 삶이 꽃인 것을 지은이: 오평선 편행본: 포레스트북스 가격: 16800원 인생 후반을...</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;