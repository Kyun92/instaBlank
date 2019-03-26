# Blank👏

인스타그램을 이용하다보면 줄바꿈이 내 마음대로 되지 않는 경험을 했을 것 입니다. 이를 해결하는 방법은 `⠀⠀⠀` 같이 공백문자를 `\n` 대신 집어 넣어주는 것입니다. 이 방법을 이용한 [변환사이트](http://instablank.com)가 이미 존재하지만, 저는 조금 더 텍스트에디터와 같이 이쁜 디자인을 적용하고 싶은 마음에 이번 프로젝트를 진행하기로 했습니다.

아이디어는 [인스타공백닷컴 - 인스타그램 줄바꾸기](http://instablank.com) 와 [carbon](https://carbon.now.sh/)의 디자인을 적용하여 베어같이 아름다운 인스타 줄바꿈 인터페이스를 만드는 것입니다.

현재 목표는

1.  `\n`를 `⠀⠀⠀` 로 치환
2.  복사 버튼
3.  블랙 & 화이트 테마
4.  자동 높이 변환
5.  [carbon](https://carbon.now.sh/) 디자인 적용

간단한 프로젝트일 것 같다.

- [react-textarea-autosize - npm](https://www.npmjs.com/package/react-textarea-autosize) 오토리사이징 모듈
- [react-resize-detector](https://github.com/maslianok/react-resize-detector) 윈도우 리사이징 디텍터
- [copy-to-clipboard](https://github.com/nkbt/react-copy-to-clipboard) 클립보드 카피
