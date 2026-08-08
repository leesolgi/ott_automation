이 폴더의 GIF는 최신 UI(헤더 순서 변경, 아이콘 카드, 결제/플레이어 개선)를 반영해 다시 촬영했습니다.

- TC01_login_success.gif : 로그인 성공
- TC05_TC06_search.gif   : 검색(있음) → 검색(결과 없음)
- TC07_TC08_payment.gif  : 콘텐츠 선택 → 결제 → 카드 태그 즉시 "보유중"으로 갱신 → 플레이어 진입

참고: 이 GIF는 실제 Chrome 브라우저에서 mockott.html을 직접 조작해 녹화한 화면입니다.
pytest-html 리포트(web_report.html)는 로컬 환경에서 아래 명령으로 새로 생성해 주세요.
ChromeDriver 다운로드가 필요해 이 작업 환경에서는 pytest를 직접 실행할 수 없었습니다.

    pip install -r requirements.txt
    python -m http.server 8000   # 별도 터미널
    pytest                        # pytest.ini의 --html 옵션으로 reports/web_report.html 자동 생성
