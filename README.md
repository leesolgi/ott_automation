# README

# MockOTT 자동화 테스트 프로젝트

🔗 라이브 데모: https://leesolgi.github.io/ott_automation/mockott.html
📊 테스트 리포트: https://leesolgi.github.io/ott_automation/reports/web_report.html

모의 OTT 서비스 화면을 직접 만들고, QA 관점에서 시나리오를 설계한 뒤 Selenium + Page Object Model로 자동화 테스트한 프로젝트입니다.

---

## 1. 프로젝트 소개

- 로그인/로그아웃, 검색, 유료 콘텐츠 결제(잔액부족·중복구매 방지), 배속 변경, 재생 제어, 이어보기, 콘텐츠 찜하기까지 구현한 모의 OTT 서비스
- IPTV 도메인에서 다뤘던 결제-재생 연동 검증 경험을 개인 프로젝트로 재구성
- Selenium + Page Object Model(POM) 구조로 18개 테스트 케이스를 자동화
- 별도로 진행하던 로그인 특화 프로젝트(MockOTT-Auth)의 시나리오 중 이 프로젝트에도 유효한 항목을 이식·결합(TC-12~15)

---

## 2. 검증한 18개 시나리오

| 번호 | 기능 | 시나리오 |
| --- | --- | --- |
| TC-01 | 로그인 | 정상 아이디/비번 로그인 |
| TC-02 | 로그인 | 잘못된 비밀번호 |
| TC-03 | 로그인 | 아이디/비번 공백 |
| TC-04 | 로그아웃 | 로그아웃 처리 |
| TC-05 | 검색 | 존재하는 키워드 검색 |
| TC-06 | 검색 | 존재하지 않는 키워드 검색 |
| TC-07 | 결제 | 잔액 부족 차단 |
| TC-08 | 결제 | 중복 구매 방지 |
| TC-09 | 배속 | 배속 옵션 변경 |
| TC-10 | 재생 제어 | 재생/일시정지 토글 |
| TC-11 | 이어보기 | 재생 중 나가기 → 재진입 시 이어보기 |
| TC-12 | 로그인 | 미등록 계정 로그인 (동등분할) |
| TC-13 | 로그인/로그아웃 | 로그인·로그아웃 버튼 활성/비활성 상태 전환 |
| TC-14 | 로그아웃 | 로그아웃 후 아이디/비밀번호 입력값 초기화 |
| TC-15 | 로그아웃 | 로그아웃·초기 진입 시 안내 일러스트 노출 |
| TC-16 | 구매 관리 | 구매 초기화 버튼 클릭 시 구매 내역·진행률 초기화 |
| TC-17 | 찜하기 | 콘텐츠 카드 찜 버튼 클릭 시 찜 상태로 전환 |
| TC-18 | 찜하기 | 찜한 콘텐츠 재클릭 시 찜 해제 |

> TC-12~15는 MockOTT-Auth 프로젝트(dockauth.html 대상)의 TC-LOGIN-004/005/007/008을 이 프로젝트 기준(mockott.html)으로 재작성해 결합한 시나리오입니다. TC-13/14를 지원하기 위해 `script.js`의 `login()`/`logout()`에 버튼 활성화 토글과 입력값 초기화 로직을 추가했고, TC-15는 `mockott.html`에 CSS(`:empty` 선택자)만으로 구현한 안내 일러스트를 사용합니다. MockOTT-Auth의 TC-LOGIN-001(로그인 모달 open)은 이 프로젝트에 로그인 모달이 없어 대상에서 제외했습니다.

TC-16(구매 초기화)은 데모/QA 편의 기능으로 신규 추가했습니다. `resetBtn` 클릭 → `confirm()` 확인 → 해당 계정의 `purchased_*`/`progress_*` localStorage 키를 삭제하고 목록을 다시 그립니다. 리뷰어가 매번 브라우저 저장소를 직접 지우지 않고도 결제·중복구매 시나리오를 반복해서 볼 수 있습니다.

**VOD 재생 화면 개선**: 플레이어의 재생 화면(`#playerScreen`)이 단색 그라데이션 대신, 콘텐츠별로 직접 제작한 AI 생성 포스터 이미지를 배경으로 사용합니다. 재생 중에는 배경 위치가 서서히 이동하는 팬(pan) 애니메이션으로 "영상이 재생되는" 느낌을 주고, 일시정지 시 애니메이션도 함께 멈춥니다. 화면 좌하단에 "AI 생성 이미지 기반 재생 화면"이라는 라벨을 항상 노출해, 실제 영상이 아니라 AI로 만든 이미지 기반 연출임을 명확히 표시했습니다.

**콘텐츠 카드도 dockauth.html 실제 렌더링 구조로 통일**했습니다. 콘텐츠마다 아이콘·컬러 썸네일(`.thumb`) + 제목/태그(`.card-body`) 2단 카드로 표시되도록 `script.js`의 `renderContentList()`를 dockauth.html의 카드 렌더링 방식과 동일한 구조로 바꿨습니다. 이 과정에서 `home_page.py`의 콘텐츠 선택 로케이터도 `//li[contains(text(), ...)]`(직계 텍스트만 매칭) → `//li[contains(., ...)]`(하위 요소 텍스트까지 매칭)로 함께 수정해 카드 내부 구조가 바뀌어도 깨지지 않도록 했습니다.

**콘텐츠 찜하기(TC-17, TC-18) 추가**: 각 콘텐츠 카드에 ♡/♥ 찜 버튼을 추가했습니다. `script.js`의 `toggleLike(contentId)`가 기존 구매 내역(`getPurchased`/`setPurchased`) 저장 패턴을 그대로 재사용해 계정별 `bookmarked_<user>` 키로 localStorage에 찜 목록을 저장하고, 클릭할 때마다 추가/해제를 토글합니다. 찜 버튼 클릭이 카드 자체의 재생/결제 진입 동작과 겹치지 않도록 `event.stopPropagation()`으로 이벤트 버블링을 막았습니다. `home_page.py`에 `get_like_button`/`toggle_like`/`is_liked` 메서드를 추가해 Selenium에서 찜 상태(`liked` 클래스)를 검증할 수 있게 했습니다.

---

## 3. 폴더 구조

```
ott_automation/
  mockott.html / script.js   ← 테스트 대상 화면
  requirements.txt           ← 의존성 목록
  pytest.ini                 ← pytest 마커(smoke/regression)·리포트 옵션
  conftest.py                ← 공통 설정 (driver, logged_in_driver, player 픽스처)
  pages/
    base_page.py             ← 공통 대기·클릭·입력 유틸 (모든 Page 객체의 부모 클래스)
    login_page.py / home_page.py / payment_page.py / player_page.py
  tests/
    test_login.py            ← TC-01, TC-02, TC-04
    test_search.py           ← TC-05 ~ TC-06
    test_payment.py          ← TC-07 ~ TC-08
    test_player.py           ← TC-09 ~ TC-11
    test_login_extra.py      ← TC-03, TC-12 ~ TC-16 (MockOTT-Auth 결합 + 구매 초기화)
    test_bookmark.py         ← TC-17 ~ TC-18 (콘텐츠 찜하기 토글)
  reports/                   ← 실행 결과 리포트
```

`pages/base_page.py`와 `pytest.ini`는 별도로 진행하던 MockOTT-Auth 프로젝트에서 이식했습니다.
- `base_page.py`: 기존에는 모든 Page Object가 `find_element`만 사용해 요소가 아직 준비되지 않은 타이밍에 실패하는 경우가 있었습니다. `WebDriverWait` 기반 명시적 대기(`click`/`type_text`/`get_text`/`is_visible`)로 바꿔 안정성을 높였고, 모든 Page Object가 이를 상속하도록 리팩터링했습니다.
- `pytest.ini`: `smoke`(핵심 기능만 빠르게) / `regression`(전체 회귀) 마커를 선언하고, `--html` 리포트 옵션을 기본값으로 고정해 매번 명령어에 옵션을 붙이지 않아도 되도록 정리했습니다. `pytest -m smoke`로 핵심 케이스만 빠르게 돌릴 수 있습니다.

> MockOTT-Auth의 `is_open(overlay_id)`(모달 열림 여부 확인)는 이 프로젝트에 모달이 없어 가져오지 않았습니다.

---

## 4. 실행 방법

```powershell
# 터미널 1 - 서버 실행
cd ott_automation && python -m http.server 8000

# 터미널 2 - 전체 테스트 실행 (pytest.ini에 리포트 옵션이 기본 설정되어 있어 pytest만 입력해도 됩니다)
pytest

# 핵심 시나리오만 빠르게 확인
pytest -m smoke

# 로그까지 별도 파일로 남기고 싶을 때
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
pytest | Tee-Object -FilePath "reports/console_log_$timestamp.txt"
```

---

## 5. 트러블슈팅: 발견하고 해결한 문제들

자동화 코드를 처음 실행했을 때 11개 테스트가 모두 실패했고, 여러 차례 재실행을 거치며 원인을 하나씩 좁혀나갔습니다. 단순히 에러 메시지 하나만 보고 바로 코드를 고치기보다, **실패 패턴을 비교해서 근본 원인(root cause)을 추적**하는 방식으로 접근했습니다.

| 증상 | 원인 | 해결 |
| --- | --- | --- |
| 전체 테스트 `ERR_NAME_NOT_RESOLVED` | 다른 프로젝트(Appium 기반)의 conftest.py가 잘못 적용됨 | 프로젝트별로 conftest.py 분리 |
| 로그인/검색 테스트 `AttributeError` | 함수명 오타 (`get_userInfo` vs `get_user_info`, `switch_t0` vs `switch_to`) | Page Object 클래스 함수명 통일 |
| 클래스를 찾을 수 없음 (`NameError`) | 파일마다 클래스 이름 대소문자가 다름 (`Homepage` vs `HomePage`) | 클래스명 전체 통일 |
| 검색/이어보기 테스트 `NoSuchElementException` (반복) | **HTML의 실제 id(`userinfo`, `contentlist`)와 자동화 코드가 찾는 id(`userInfo`, `contentList`)의 대소문자가 서로 다름** | HTML/JS의 id 이름을 표준 컨벤션(camelCase)으로 통일하여 수정 |
| 재생/일시정지 버튼을 눌러도 반응 없음 | HTML의 `onclick="toggleplay()"`와 실제 JS 함수명 `togglePlay()`가 서로 달라 클릭 이벤트가 연결되지 않음 | HTML의 `onclick` 속성과 JS 함수명을 일치시켜 수정 |
| 테스트 간 결과가 서로 영향을 줌 (중복구매 케이스 등) | 브라우저의 `localStorage`에 이전 실행의 구매 기록이 남아있음 | 매 테스트 시작 전 `localStorage.clear()`로 상태 초기화 |
| 이어보기 테스트에서 “나가기” 버튼을 못 찾음 | HTML 버튼 텍스트 끝에 공백이 하나 더 있어 XPath 텍스트 매칭 실패 (`나가기 (진행률 저장)` vs `나가기 (진행률 저장)`) | HTML의 불필요한 공백 제거 |
| 중복구매 테스트에서 결제 확인 얼럿을 못 찾음 | 실제 앱은 이미 구매한 콘텐츠 재선택 시 결제창 없이 바로 재생 화면으로 이동함 (테스트 시나리오가 실제 동작과 불일치) | 테스트를 “결제창 없이 바로 재생 화면으로 전환되는지” 검증하도록 수정 |
| 배포 사이트에서 로그인 버튼을 눌러도 전혀 반응 없음 (`login is not defined`) | `script.js`의 `exitPlayer()` 함수 뒤에 중복 statement와 짝이 맞지 않는 `}`가 남아 있어 파일 전체가 `SyntaxError`로 파싱 실패 → 스크립트가 아예 로드되지 않음 | 중복된 코드와 불필요한 `}`를 제거해 문법 오류 해결 |
| 재생 화면(`#playerScreen`)이 레이아웃 깨짐 | `mockott.html`의 플레이어 영역에 `<div id="playerScreen">`과 `<video id="playerVideo">`가 실수로 중첩·중복 삽입되어 마크업이 깨져 있었음 | div 하나 + video 하나의 정상 구조로 정리 |

**적용한 접근 방식**
- 에러가 나면 먼저 “어떤 요소를 찾다가 실패했는지”와 “같은 방식으로 찾는 다른 요소는 성공했는지”를 비교
- id로 찾는 요소만 계속 실패하고, 텍스트로 찾는 요소는 성공하는 패턴을 발견 → 테스트 코드가 아니라 화면(HTML) 쪽 문제로 범위를 좁힘
- 실제 HTML/JS 소스를 다시 열어 id 네이밍 불일치를 확인하고 수정

**실무 연계 포인트**
> 실무에서도 개발/기획 등 여러 담당자가 관여한 시스템에서는 증상만 보고 원인을 단정하지 않고, 재현 조건을 비교해서 근본 원인을 찾는 접근이 중요합니다. 이번 프로젝트에서도 같은 방식으로 접근해 문제를 해결했습니다.

---

**최종 결과:** 위 문제들을 모두 해결한 뒤 11개 시나리오 전체 통과 확인 (`reports/web_report.html` 참고)

---

## 6. 다음 단계

- [ ]  Appium으로 모바일 웹(Chrome) 환경 확장
- [ ]  의도적으로 버그를 심어 실패 케이스 및 버그 리포트 작성 연습
- [ ]  GitHub Actions로 CI 자동화 (커밋마다 자동 테스트 실행)
