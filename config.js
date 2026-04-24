/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "유동진",
    nameEn: "Dongjin You",
    phone: "01088836550",
    father: "유창석",
    fatherPhone: "01033334444",
    mother: "윤명희",
    motherPhone: "01055556666",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "조혜인",
    nameEn: "Hyein Cho",
    phone: "01065455991",
    father: "조륭식",
    fatherPhone: "01048024658",
    mother: "조수민",
    motherPhone: "01052801020", 
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-30",
    time: "14:50",
    venue: "보타닉파크웨딩",
    hall: "카라홀",
    address: "서울시 강서구 마곡중앙5로 6",
    tel: "02-2662-8300",
    mapLinks: {
      kakao: "https://place.map.kakao.com/1089036510",
      naver: "https://naver.me/502MVbqj"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "반짝이는 여름 햇살처럼\n빛나는 인연이 결실을 맺습니다.\n\n한여름 밤을 수놓는 별빛 중 서로를 알아본 것처럼\n작은 생명을 소중히 여기는 따뜻한 마음이\n어느덧 운명 같은 사랑이 되었습니다.\n\n\
          지금껏 각자의 이야기를 엮어온 저희가\n이제는 서로의 이야기에 빛나는 주인공이 되려합니다.\n새롭게 쓰일 저희의 첫 페이지에 오셔서\n따뜻한 마음으로 축복해 주시면 큰 기쁨이겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "유기견 봉사에서 처음 만나,\n생명을 아끼는 마음으로 서로를 알아보았습니다.\n\n이제는 다정한 보폭으로\n하나의 길을 함께 걸으려 합니다.\n\n뜻깊게 맺어진 저희의 새로운 시작에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "유동진", bank: "신한은행", number: "110-364-906912" },
      { role: "아버지", name: "유창석", bank: "우리은행", number: "129-08-241300" }
      // { role: "어머니", name: "윤명희", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "조혜인", bank: "국민은행", number: "234902-01-045214" },
      { role: "아버지", name: "조륭식", bank: "국민은행", number: "234901-01-084195" },
      { role: "어머니", name: "조수민", bank: "국민은행", number: "939701-01-097560" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "유동진 ♥ 조혜인 결혼합니다",
    description: "2026년 8월 30일 (일) 2:50pm \n보타닉파크웨딩 카라홀, 소중한 분들을 초대합니다."
  }
};
