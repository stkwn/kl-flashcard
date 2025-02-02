import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// 课本
const renjiaoban = {
  'Year1A': [
    {'lesson1': ['天','地','人','你','我','他']},
    {'lesson2': ['一','二','三','四','五','上']},
    {'lesson3': ['口','耳','目','手','足','站']},
    {'lesson4': ['日','月','山','川','水','火','田','禾']},
    {'lesson5': ['六','七','八','九','十']},
    {'lesson6': ['爸','妈','大','马','路','土']},
    {'lesson7': ['本','学','校','班','级','姓','名','王']},
    {'lesson8': ['哥','弟','画','花','打','棋','积','木']},
    {'lesson9': ['字','词','句','子','桌','纸','读','书']},
    {'lesson10': ['鱼','鸭','乌','鸦','午','星','期','语','文']},
    {'lesson11': ['数','写','会','白','菜','西','瓜','果']},
  ],
  'Year1B': [
    {'lesson1': ['狗','猫','鸟','鸡','鸭','鹅','鱼','虫']},
  ],
};

const xindongfang = {
  'Year1A': [
    {'lesson1': ['小','牛','我','头','回','子','了','你','好','又','乐','门','气','飞','火','口','风','妈','爸','山','白','羊','兔','车','虫','长','自','己','地','大','来','妹']},
    {'lesson2': ['哥','去','个','见','您','请','说','果','园','不','里','外','坐','雨','她','他','家','一', '二','三','上','土','四','五','下','田','天','地','人','你','我','他','她',]},
    {'lesson3': ['白','绿','红','天','向','羽','下','儿','雨','点','要','里','们','当','过','青','多','开','金','黄','色','可','是','有']},
    {'lesson4': ['它','也','森','林','肚','什','么','只','力','心','苗','种','竹','牙','群','花','为','用','几','步','洞','着','巴','少']},
    {'lesson5': ['天','在','春','鸭','中','花','声','草','朋','友','有','手','夏','气','变','才','云','少','会','空','了','子','树','叶','片','大']},
    {'lesson6': ['个','秋','凉','红','和','妈','冬','睡','觉','从','林','家','走','吗','太','田','画','阳','光','果','他','清','给','尖']},
    {'lesson7': ['又','地','远','海','前','小','去','贝','笑','着','东','西','南','北','叶','江','鱼','衣','尺','亮','身','服','细','出']},
    {'lesson8': ['胖','毛','师','叫','说','追','告','升','让','别','跑','因','扔','问','半','彩','数','来','云','没','更','飘','后','早']},
    {'lesson9': ['后','我','影','条','黑','左','右','狗','常','跟','看','外','胆','往','窗','色','爸','鸟','晚','再','自','己','穿','时','候','听','觉']},
    {'lesson10': ['得','快','雷','男','足','走','孩','事','电','间','还','真','房','学','校','瓜','姐','拍','同','头','爱','欢','星','说','事','书']},
  ],
  'Year1B': [
    {'lesson1': ['狗','猫','鸟','鸡','鸭','鹅','鱼','虫']},
  ],
};
const bookList = {
  'renjiaoban': renjiaoban,
  'xindongfang': xindongfang
};

const getName = (str) => {
  if (str.startsWith('lesson')) {
    const lessonNumber = str.replace('lesson', '');
    return `第${lessonNumber}课`;
  }

  if (str.startsWith('Year')) {
    const semester = str.endsWith('A') ? '上学期' : '下学期';
    const yearNumber = str.replace('Year', '').replace('A', '').replace('B', '');
    const yearChinese = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'][yearNumber];
    return `${yearChinese}年级${semester}`;
  }

  switch (str) {
    case 'renjiaoban':
      return '人教版中文教材';
    case 'xindongfang':
      return '新东方比邻中文';
    default:
      return '';
  }
};

const ChoosePractice = ({  onHandleSubmit }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleBookChange = (event) => {
    setSelectedBook(event.target.value);
    setSelectedGrade(null);
    setSelectedLesson(null);
  };

  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
    setSelectedLesson(null);
  };

  const handleLessonChange = (event) => {
    setSelectedLesson(event.target.value);
  };

  useEffect(() => {
    if (selectedBook && selectedGrade && selectedLesson) {
      bookList[selectedBook][selectedGrade].find((lesson) => {
      if (Object.keys(lesson)[0] === selectedLesson) {
        onHandleSubmit(lesson[selectedLesson].join(' '));
      }
      });
    }
    setSelectedBook(null);
    setSelectedGrade(null);
    setSelectedLesson(null);
  }, [selectedLesson]);

  const getGrades = () => {
    if (!selectedBook) return [];
    return Object.keys(bookList[selectedBook]);
  };

  const getLessons = () => {
    if (!selectedGrade) return [];
    return bookList[selectedBook][selectedGrade];
  };

  return (
    <Wrapper>
      <h2>选择练习材料</h2>
      <SelectWrapper>
        <SelectDivWrapper>
          <label>教材</label>
          <select onChange={handleBookChange}>
            <option value="">选择教程名称</option>
            {Object.keys(bookList).map((book, index) => (
              <option key={index} value={book}>
                {getName(book)}
              </option>
            ))}
          </select>
        </SelectDivWrapper>

        <SelectDivWrapper>
          <label>年级:</label>
          <select onChange={handleGradeChange}>
            <option value="">选择一个级别</option>
            {getGrades().map((grade, index) => (
              <option key={index} value={grade}>
                {getName(grade)}
              </option>
            ))}
          </select>
        </SelectDivWrapper>

        <SelectDivWrapper>
          <label>课程</label>
          <select onChange={handleLessonChange}>
            <option value="">选择一个课</option>
            {getLessons().map((lesson, index) => (
              <option key={index} value={Object.keys(lesson)[0]}>
                {getName(Object.keys(lesson)[0])}
              </option>
            ))}
          </select>
        </SelectDivWrapper>
      </SelectWrapper>
    </Wrapper>
  );
};

export default ChoosePractice;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  height: 30rem;
  background-color: var(--clr-primary-7);
  padding: 16px;
  font-size: 1.6rem;
`;

const SelectWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 20px;
`;

const SelectDivWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  & > label {
    font-weight: 600;
  }
  & > select {
    padding: 4px 8px;
    border-radius: 4px;
  }
`;