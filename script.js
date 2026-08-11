const USERS = {
    qatest: {password: '1234', balance: 15000}
};

const CONTENTS = [
    {id: 1, title: '우주 다큐멘터리', price: 0, locked: false, icon: '🚀', videoSrc: 'A_cinematic_ultra_realistic_.mp4', poster: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIwIDE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdTcGFjZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmY1ZmEyIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2MyM2Y4MCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvd1NwYWNlIiBjeD0iNTAlIiBjeT0iMzAlIiByPSI2MCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmZmNmZiIiBzdG9wLW9wYWNpdHk9IjAuNTUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmNmZiIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSJ1cmwoI2JnU3BhY2UpIi8+CiAgPGNpcmNsZSBjeD0iMTYwIiBjeT0iNjAiIHI9IjkwIiBmaWxsPSJ1cmwoI2dsb3dTcGFjZSkiLz4KICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjMwIiByPSIxLjYiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuOSIvPgogIDxjaXJjbGUgY3g9IjcwIiBjeT0iMTgiIHI9IjEuMSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC43Ii8+CiAgPGNpcmNsZSBjeD0iMTEwIiBjeT0iNDAiIHI9IjEuNCIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC44Ii8+CiAgPGNpcmNsZSBjeD0iMjYwIiBjeT0iMjUiIHI9IjEuNiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC45Ii8+CiAgPGNpcmNsZSBjeD0iMjkwIiBjeT0iNTUiIHI9IjEuMSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC43Ii8+CiAgPGNpcmNsZSBjeD0iMjQwIiBjeT0iNzAiIHI9IjEuMyIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC44Ii8+CiAgPGNpcmNsZSBjeD0iMzUiIGN5PSI5MCIgcj0iMS4yIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjYiLz4KICA8Y2lyY2xlIGN4PSIzMDAiIGN5PSIxMDAiIHI9IjEuNCIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC43Ii8+CiAgPGNpcmNsZSBjeD0iMjI1IiBjeT0iMTUwIiByPSIzNCIgZmlsbD0iIzJhMGQxZiIgb3BhY2l0eT0iMC4zNSIvPgogIDxjaXJjbGUgY3g9IjIxNSIgY3k9IjE0MCIgcj0iMzQiIGZpbGw9IiMzYTEyMjgiLz4KICA8Y2lyY2xlIGN4PSIyMDUiIGN5PSIxMjgiIHI9IjUiIGZpbGw9IiNmZjlmYzQiIG9wYWNpdHk9IjAuNSIvPgogIDxjaXJjbGUgY3g9IjIyMiIgY3k9IjE1MCIgcj0iMyIgZmlsbD0iI2ZmOWZjNCIgb3BhY2l0eT0iMC40Ii8+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTUsNzApIHJvdGF0ZSgzNSkiPgogICAgPHBhdGggZD0iTTAgLTQ2IEMxMyAtMzQgMTUgLTYgMTIgMjAgTC0xMiAyMCBDLTE1IC02IC0xMyAtMzQgMCAtNDYgWiIgZmlsbD0iI2ZlZjZmZiIvPgogICAgPHBhdGggZD0iTS0xMiAxMiBMLTMwIDM0IEwtMTAgMjggWiIgZmlsbD0iI2ZmNWZhMiIvPgogICAgPHBhdGggZD0iTTEyIDEyIEwzMCAzNCBMMTAgMjggWiIgZmlsbD0iI2ZmNWZhMiIvPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9Ii0xMCIgcj0iNyIgZmlsbD0iI2MyM2Y4MCIvPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9Ii0xMCIgcj0iNCIgZmlsbD0iI2ZlZjZmZiIgb3BhY2l0eT0iMC42Ii8+CiAgICA8cGF0aCBkPSJNLTggMjAgTDAgNDAgTDggMjAgWiIgZmlsbD0iI2ZmYjM0NyIvPgogICAgPHBhdGggZD0iTS00IDIwIEwwIDM0IEw0IDIwIFoiIGZpbGw9IiNmZmY2ZDkiLz4KICA8L2c+Cjwvc3ZnPgo='},
    {id: 2, title: '액션 영화', price: 3000, locked: true, icon: '🎬', videoSrc: '초_액션영화_ai.mp4', poster: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIwIDE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdBY3Rpb24iIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmYjM0NyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNkOThhMWYiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImJ1cnN0IiBjeD0iNjUlIiBjeT0iNDUlIiByPSI1NSUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmZmM2Q5IiBzdG9wLW9wYWNpdHk9IjAuOSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjQ1JSIgc3RvcC1jb2xvcj0iI2ZmZGNhMCIgc3RvcC1vcGFjaXR5PSIwLjUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZkY2EwIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSJ1cmwoI2JnQWN0aW9uKSIvPgogIDxnIG9wYWNpdHk9IjAuNTUiIHN0cm9rZT0iI2ZmZjZlNiIgc3Ryb2tlLXdpZHRoPSIzIj4KICAgIDxsaW5lIHgxPSIyMDgiIHkxPSI4MiIgeDI9IjE1MCIgeTI9IjI0Ii8+CiAgICA8bGluZSB4MT0iMjA4IiB5MT0iODIiIHgyPSIxMjAiIHkyPSI2MCIvPgogICAgPGxpbmUgeDE9IjIwOCIgeTE9IjgyIiB4Mj0iMTEyIiB5Mj0iMTEwIi8+CiAgICA8bGluZSB4MT0iMjA4IiB5MT0iODIiIHgyPSIxNTAiIHkyPSIxNTAiLz4KICAgIDxsaW5lIHgxPSIyMDgiIHkxPSI4MiIgeDI9IjIwMCIgeTI9IjIwIi8+CiAgICA8bGluZSB4MT0iMjA4IiB5MT0iODIiIHgyPSIyNjAiIHkyPSIzMCIvPgogICAgPGxpbmUgeDE9IjIwOCIgeTE9IjgyIiB4Mj0iMjcwIiB5Mj0iMTIwIi8+CiAgPC9nPgogIDxjaXJjbGUgY3g9IjIwOCIgY3k9IjgyIiByPSI2MCIgZmlsbD0idXJsKCNidXJzdCkiLz4KICA8cmVjdCB4PSIxMCIgeT0iMTUwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWExNDA2IiBvcGFjaXR5PSIwLjM1Ii8+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTUsMTUwKSI+CiAgICA8cGF0aCBkPSJNMCAwIEwwIC0zNCBMMTggLTM0IEwxOCAtNDYgTDQ2IC00NiBMNDYgLTM0IEw2NCAtMzQgTDY0IDAgWiIgZmlsbD0iIzFhMTQwNiIgb3BhY2l0eT0iMC44NSIvPgogICAgPHJlY3QgeD0iMTAiIHk9Ii0yNiIgd2lkdGg9IjEyIiBoZWlnaHQ9IjE0IiBmaWxsPSIjZmZiMzQ3Ii8+CiAgICA8cmVjdCB4PSIyNiIgeT0iLTI2IiB3aWR0aD0iMTIiIGhlaWdodD0iMTQiIGZpbGw9IiNmZmIzNDciLz4KICAgIDxyZWN0IHg9IjQyIiB5PSItMjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNCIgZmlsbD0iI2ZmYjM0NyIvPgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDgsODIpIj4KICAgIDxwb2x5Z29uIHBvaW50cz0iMCwtMjYgOCwtOCAyOCwtNiAxMyw4IDE3LDI4IDAsMTcgLTE3LDI4IC0xMyw4IC0yOCwtNiAtOCwtOCIgZmlsbD0iI2ZmZjZlNiIgc3Ryb2tlPSIjZDk4YTFmIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+Cjwvc3ZnPgo='},
    {id: 3, title: '사극 드라마', price: 10000, locked: true, icon: '👑', videoSrc: '초_사극드라마_ai.mp4', poster: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIwIDE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdQZXJpb2QiIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzJiYTk3YSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwZjVjNDAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Im1vb24iIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmY4ZTEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZlOWE4Ii8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgZmlsbD0idXJsKCNiZ1BlcmlvZCkiLz4KICA8Y2lyY2xlIGN4PSIyNTIiIGN5PSI0MiIgcj0iMjYiIGZpbGw9InVybCgjbW9vbikiLz4KICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjEzMCIgcj0iMS40IiBmaWxsPSIjZWFmZmY1IiBvcGFjaXR5PSIwLjYiLz4KICA8Y2lyY2xlIGN4PSI2MCIgY3k9IjEwMCIgcj0iMS4xIiBmaWxsPSIjZWFmZmY1IiBvcGFjaXR5PSIwLjUiLz4KICA8Y2lyY2xlIGN4PSI5MCIgY3k9IjE0MCIgcj0iMS4zIiBmaWxsPSIjZWFmZmY1IiBvcGFjaXR5PSIwLjUiLz4KICA8ZyBmaWxsPSIjMDgzMDFmIj4KICAgIDxwb2x5Z29uIHBvaW50cz0iMjAsMTgwIDIwLDEyMCA0NSwxMDAgNzAsMTIwIDcwLDE4MCIvPgogICAgPHJlY3QgeD0iMzAiIHk9IjEzMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMmJhOTdhIi8+CiAgICA8cmVjdCB4PSI1MCIgeT0iMTMwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IiMyYmE5N2EiLz4KICAgIDxwb2x5Z29uIHBvaW50cz0iNjAsMTgwIDYwLDExMCAxMDAsODAgMTQwLDExMCAxNDAsMTgwIi8+CiAgICA8cmVjdCB4PSI3NSIgeT0iMTI1IiB3aWR0aD0iMTIiIGhlaWdodD0iMjYiIGZpbGw9IiMwZjVjNDAiLz4KICAgIDxyZWN0IHg9IjExMyIgeT0iMTI1IiB3aWR0aD0iMTIiIGhlaWdodD0iMjYiIGZpbGw9IiMwZjVjNDAiLz4KICAgIDxwb2x5Z29uIHBvaW50cz0iOTAsODAgMTAwLDYwIDExMCw4MCIvPgogIDwvZz4KICA8ZyBmaWxsPSIjMDYyNDE4Ij4KICAgIDxwb2x5Z29uIHBvaW50cz0iMTMwLDE4MCAxMzAsMTMyIDE3NSwxMDUgMjIwLDEzMiAyMjAsMTgwIi8+CiAgICA8cG9seWdvbiBwb2ludHM9IjE3NSwxMDUgMTU1LDkwIDE5NSw5MCIvPgogICAgPHJlY3QgeD0iMTY1IiB5PSIxNTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMCIgZmlsbD0iIzJiYTk3YSIvPgogICAgPHJlY3QgeD0iMTQwIiB5PSIxNDUiIHdpZHRoPSIxNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzBmNWM0MCIvPgogICAgPHJlY3QgeD0iMTk2IiB5PSIxNDUiIHdpZHRoPSIxNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzBmNWM0MCIvPgogIDwvZz4KICA8cmVjdCB4PSIwIiB5PSIxNzYiIHdpZHRoPSIzMjAiIGhlaWdodD0iNCIgZmlsbD0iIzA2MjQxOCIvPgo8L3N2Zz4K'},
    {id: 4, title: '시사교양', price: 0, locked: false, icon: '📰', videoSrc: '시사교양_초_ai.mp4', poster: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIwIDE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdOZXdzIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM0ZmMzZjciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMmE4ZmM0Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJnbG93TmV3cyIgY3g9IjUwJSIgY3k9IjI1JSIgcj0iNjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2VhZjhmZiIgc3RvcC1vcGFjaXR5PSIwLjUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWFmOGZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSJ1cmwoI2JnTmV3cykiLz4KICA8Y2lyY2xlIGN4PSIxNjAiIGN5PSI0NSIgcj0iODAiIGZpbGw9InVybCgjZ2xvd05ld3MpIi8+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYwLDE1MCkiPgogICAgPHJlY3QgeD0iLTcwIiB5PSIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjEwIiByeD0iMiIgZmlsbD0iIzBiM2E1MiIvPgogICAgPHJlY3QgeD0iLTUyIiB5PSItMzAiIHdpZHRoPSIxNCIgaGVpZ2h0PSIzMCIgZmlsbD0iIzBlNGE2OCIvPgogICAgPHJlY3QgeD0iLTE2IiB5PSItNDYiIHdpZHRoPSIxNCIgaGVpZ2h0PSI0NiIgZmlsbD0iIzBlNGE2OCIvPgogICAgPHJlY3QgeD0iMjAiIHk9Ii0yMiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjIyIiBmaWxsPSIjMGU0YTY4Ii8+CiAgICA8cmVjdCB4PSI1MiIgeT0iLTE0IiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9IiMwZTRhNjgiLz4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYwLDY4KSI+CiAgICA8cmVjdCB4PSItNDYiIHk9Ii0zNCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjYwIiByeD0iNiIgZmlsbD0iI2VhZjhmZiIvPgogICAgPHJlY3QgeD0iLTM4IiB5PSItMjQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI2IiByeD0iMiIgZmlsbD0iIzJhOGZjNCIvPgogICAgPHJlY3QgeD0iLTM4IiB5PSItMTIiIHdpZHRoPSI3NiIgaGVpZ2h0PSI0IiByeD0iMS41IiBmaWxsPSIjOWZkOGY1Ii8+CiAgICA8cmVjdCB4PSItMzgiIHk9Ii0zIiB3aWR0aD0iNzYiIGhlaWdodD0iNCIgcng9IjEuNSIgZmlsbD0iIzlmZDhmNSIvPgogICAgPHJlY3QgeD0iLTM4IiB5PSI2IiB3aWR0aD0iNjAiIGhlaWdodD0iNCIgcng9IjEuNSIgZmlsbD0iIzlmZDhmNSIvPgogICAgPHJlY3QgeD0iLTM4IiB5PSIxNiIgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiByeD0iMiIgZmlsbD0iI2ZmYjM0NyIvPgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjAsNjgpIHJvdGF0ZSgtMTQpIj4KICAgIDxyZWN0IHg9Ii0zIiB5PSItNTgiIHdpZHRoPSI2IiBoZWlnaHQ9IjI2IiByeD0iMyIgZmlsbD0iI2VhZjhmZiIvPgogICAgPGVsbGlwc2UgY3g9IjAiIGN5PSItNjIiIHJ4PSI5IiByeT0iMTIiIGZpbGw9IiNlYWY4ZmYiLz4KICAgIDxyZWN0IHg9Ii0xMSIgeT0iLTcwIiB3aWR0aD0iMjIiIGhlaWdodD0iNCIgcng9IjIiIGZpbGw9IiMwYjNhNTIiLz4KICA8L2c+Cjwvc3ZnPgo='},
    // 잔액 부족으로 재생 진입 불가 → 영상 불필요
    {id: 5, title: '황금관 특별판', price: 20000, locked: true, icon: '🎖️', videoSrc: null, poster: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIwIDE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHb2xkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzYTJmMGYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMGYwYTAyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJnbG93R29sZCIgY3g9IjUwJSIgY3k9IjM1JSIgcj0iNTUlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZTlhOCIgc3RvcC1vcGFjaXR5PSIwLjUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZlOWE4IiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9Im1lZGFsIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmU5YTgiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjYzk5NzFmIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgZmlsbD0idXJsKCNiZ0dvbGQpIi8+CiAgPGNpcmNsZSBjeD0iMTYwIiBjeT0iNzAiIHI9IjEwMCIgZmlsbD0idXJsKCNnbG93R29sZCkiL
];

let currentUser = null;
let pendingContentid = null;
let currentContentid = null;
let progress = 0;

function getPurchased() {
    return JSON.parse(localStorage.getItem('purchased_' + currentUser) || '[]');
}

function setPurchased(list) {
    localStorage.setItem('purchased_' + currentUser, JSON.stringify(list));
}

function getBookmarked() {
    return JSON.parse(localStorage.getItem('bookmarked_' + currentUser) || '[]');
}

function setBookmarked(list) {
    localStorage.setItem('bookmarked_' + currentUser, JSON.stringify(list));
}

function getProgress(id) {
    const data = JSON.parse(localStorage.getItem('progress_' + currentUser) || '{}');
    return data[id] || 0;
}

function setProgress(id, value) {
    const data = JSON.parse(localStorage.getItem('progress_' + currentUser) || '{}');
    data[id] = value;
    localStorage.setItem('progress_' + currentUser, JSON.stringify(data));
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password) {
        alert('아이디와 비밀번호를 입력하세요');
        return;
    }
    const user = USERS[username];
    if (!user || user.password !== password) {
        alert('아이디 또는 비밀번호가 틀렸습니다');
        return;
    }
    currentUser = username;
    document.getElementById('userInfo').textContent = `${username}님 로그인됨 (잔액: ${user.balance}원)`;
    renderContentList(CONTENTS);
    setAuthButtonState(true);
}

function logout() {
    currentUser = null;
    document.getElementById('userInfo').textContent = '';
    document.getElementById('contentList').innerHTML = '';
    document.getElementById('player').classList.add('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    setAuthButtonState(false);
}

function setAuthButtonState(isLoggedIn) {
    // 로그인/로그아웃 버튼의 활성/비활성 상태를 로그인 여부에 맞춰 전환한다
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    if (loginBtn) loginBtn.disabled = isLoggedIn;
    if (logoutBtn) logoutBtn.disabled = !isLoggedIn;
}

function resetPurchases() {
    // 데모/테스트 편의 기능: 현재 계정의 구매 내역·시청 진행률을 초기화한다
    if (!currentUser) {
        alert('로그인이 필요합니다');
        return;
    }
    if (!confirm('구매 내역과 시청 진행률을 초기화할까요? 되돌릴 수 없습니다.')) {
        return;
    }
    localStorage.removeItem('purchased_' + currentUser);
    localStorage.removeItem('progress_' + currentUser);
    document.getElementById('player').classList.add('hidden');
    refreshContentList();
}

function search() {
    refreshContentList();
}

function renderContentList(list) {
    const ul = document.getElementById('contentList');
    ul.innerHTML = '';
    list.forEach(c => {
        const li = document.createElement('li');
        const purchased = getPurchased().includes(c.id);
        const isLocked = c.locked && !purchased;

        let tagHtml;
        if (isLocked) {
            tagHtml = `<span class="tag-paid">${c.price}원</span>`;
        } else if (c.price === 0) {
            tagHtml = `<span class="tag-free">무료</span>`;
        } else {
            tagHtml = `<span class="tag-owned">보유중</span>`;
        }

        const liked = getBookmarked().includes(c.id);

        li.innerHTML =
            `<div class="thumb" style="background-image:url('${c.poster}')">` +
                `<button class="like-btn${liked ? ' liked' : ''}" data-id="${c.id}" onclick="event.stopPropagation(); toggleLike(${c.id})">${liked ? '♥' : '♡'}</button>` +
                `${isLocked ? '<span class="lock-badge">🔒</span>' : ''}</div>` +
            `<div class="card-body">` +
                `<div class="card-title">${c.title}</div>` +
                `<div class="card-meta">${tagHtml}</div>` +
            `</div>`;
        li.onclick = () => selectContent(c.id);
        ul.appendChild(li);
    });
}

function toggleLike(contentId) {
    if (!currentUser) { alert('로그인이 필요합니다'); return; }
    const list = getBookmarked();
    const idx = list.indexOf(contentId);
    if (idx === -1) {
        list.push(contentId);
    } else {
        list.splice(idx, 1);
    }
    setBookmarked(list);

    const liked = list.includes(contentId);
    const btn = document.querySelector(`.like-btn[data-id="${contentId}"]`);
    if (btn) {
        btn.classList.toggle('liked', liked);
        btn.textContent = liked ? '♥' : '♡';
    }
}

function selectContent(id) {
    if (!currentUser) { alert('로그인이 필요합니다'); return; }
    const content = CONTENTS.find(c => c.id === id);
    const purchased = getPurchased().includes(id);
    if (content.locked && !purchased) {
        pendingContentid = id;
        document.getElementById('paymentInfo').textContent = content.title;
        document.getElementById('paymentPrice').textContent = `${content.price}원`;
        document.getElementById('paymentBalance').textContent = `${USERS[currentUser].balance}원`;
        const thumb = document.getElementById('paymentThumb');
        if (thumb) thumb.style.backgroundImage = `url('${content.poster}')`;
        document.getElementById('payment').classList.remove('hidden');
        return;
    }
    openPlayer(id);
}

function refreshContentList() {
    // 현재 검색어가 있으면 검색 결과 기준으로, 없으면 전체 목록 기준으로 다시 그린다
    const keyword = document.getElementById('keyword').value.trim();
    if (keyword) {
        const filtered = CONTENTS.filter(c => c.title.includes(keyword));
        if (filtered.length === 0) {
            document.getElementById('contentList').innerHTML = '<li class="no-result">검색 결과가 없습니다.</li>';
            return;
        }
        renderContentList(filtered);
    } else {
        renderContentList(CONTENTS);
    }
}

function confirmpurchase() {
    const content = CONTENTS.find(c => c.id === pendingContentid);
    const purchasedList = getPurchased();
    if (purchasedList.includes(content.id)) { alert('이미 구매한 콘텐츠입니다'); closePayment(); return; }
    const user = USERS[currentUser];
    if (user.balance < content.price) { alert('잔액이 부족합니다.'); return; }
    user.balance -= content.price;
    purchasedList.push(content.id);
    setPurchased(purchasedList);
    document.getElementById('userInfo').textContent = `${currentUser}님 로그인됨 (잔액: ${user.balance}원)`;
    closePayment();
    refreshContentList(); // 구매 직후 카드 태그(가격 → 보유중)를 바로 반영
    openPlayer(content.id);
}

function closePayment() {
    document.getElementById('payment').classList.add('hidden');
    pendingContentid = null;
}

function openPlayer(id) {
    currentContentid = id;
    const content = CONTENTS.find(c => c.id === id);
    const resumeMsg = document.getElementById('resumeMessage');
    const resumeBadge = document.getElementById('resumeBadge');
    const screen = document.getElementById('playerScreen');

    document.getElementById('playerTitle').textContent = content.title;
    document.getElementById('player').classList.remove('hidden');
    document.getElementById('playBtn').textContent = '재생';
    // VOD 재생 화면: 콘텐츠별 AI 생성 포스터 이미지를 배경으로 사용해 실제 영상처럼 연출
   if (screen) {
        screen.style.backgroundImage = `url('${content.poster}')`;
        screen.classList.add('paused');
    }

    const video = document.getElementById('playerVideo');
    if (video) {
        video.pause();
        video.currentTime = 0;
        video.style.display = 'none';
        video.src = content.videoSrc;
        video.load();
    }
    const saved = getProgress(id);
    if (saved > 0 && saved < 100) {
        progress = saved;
        resumeMsg.textContent = `이어보기: ${saved}% 지점부터 이어서 재생합니다.`;
        resumeBadge.classList.remove('hidden');
    } else {
        progress = 0;
        resumeMsg.textContent = '';
        resumeBadge.classList.add('hidden');
    }
    document.getElementById('progressText').textContent = progress + '%';
    document.getElementById('playerProgressBar').style.width = progress + '%';
}

function togglePlay() {
    const btn = document.getElementById('playBtn');
    const screen = document.getElementById('playerScreen');
    const video = document.getElementById('playerVideo');
    const willPlay = btn.textContent === '재생';

    btn.textContent = willPlay ? '일시정지' : '재생';
    if (screen) screen.classList.toggle('paused', !willPlay);

    if (video) {
        if (willPlay) {
            video.style.display = 'block';
            video.play();
        } else {
            video.pause();
        }
    }
}

function changeSpeed() {
    // 선택값은 select 엘리먼트에 그대로 반영됨 (자동화 테스트에서 값 확인)
}

function exitPlayer() {
    progress = 30;
    setProgress(currentContentid, progress);

    const video = document.getElementById('playerVideo');
    if (video) {
        video.pause();
        video.currentTime = 0;
        video.style.display = 'none';
    }

    document.getElementById('player').classList.add('hidden');
}

// 아이디/비밀번호/검색어 입력 후 Enter 키로도 버튼 클릭과 동일하게 동작하도록 지원
document.getElementById('username').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') login();
});
document.getElementById('password').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') login();
});
document.getElementById('keyword').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') search();
});
