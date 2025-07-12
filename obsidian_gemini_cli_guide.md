# 🌟 Obsidian + Gemini CLI 가이드북  
**AI와 함께하는 스마트 글쓰기 환경 만들기**

---

## 📚 목차
1. [준비물 점검](#1-준비물-점검)
2. [Gemini CLI 설치](#2-Gemini-CLI-설치)
3. [Obsidian에 터미널 연결](#3-Obsidian에-터미널-연결)
4. [환경 변수 문제 해결](#4-환경-변수-문제-해결)
5. [실제 사용 예시](#5-실제-사용-예시)
6. [자주 발생하는 문제 해결](#6-자주-발생하는-문제-해결)
7. [효율적인 사용 팁](#7-효율적인-사용-팁)
8. [마무리 및 다음 단계](#8-마무리-및-다음-단계)

---

## 1. 준비물 점검

| 준비 항목        | 설명 |
|------------------|------|
| macOS 컴퓨터     | 터미널 작업에 용이함 (Windows/Linux도 유사하게 가능) |
| Obsidian         | 마크다운 기반 노트 앱 |
| Google 계정      | Gemini API 키 발급용 |
| 터미널 기본 사용 | 복사/붙여넣기 수준이면 충분 |

---

## 2. Gemini CLI 설치

### 2.1 Node.js 설치

\`\`\`bash
# Homebrew 설치 (없는 경우만)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Node.js 설치
brew install node

# 설치 확인
node --version
npm --version
\`\`\`

> ✅ 버전이 표시되면 설치 완료!

---

### 2.2 Gemini CLI 설치 및 설정

\`\`\`bash
# Gemini CLI 설치
npm install -g @google/generative-ai-cli

# 설치 확인
gemini --version
\`\`\`

### 2.3 API 키 발급 및 등록

1. [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey) 접속
2. Google 계정 로그인 후 `Create API Key`
3. 키 복사 후 터미널에 입력

\`\`\`bash
gemini config set api-key YOUR_API_KEY_HERE
\`\`\`

\`\`\`bash
# 모델 목록 확인
gemini models list
\`\`\`

> 모델 리스트가 출력되면 성공!

---

## 3. Obsidian에 터미널 연결

### 3.1 Community Plugin 설치

1. Obsidian 실행
2. `⚙️ 설정 → Community Plugins`
3. **Community Plugins 활성화**
4. "Browse" 클릭 → "Terminal" 검색
5. 작성자: `polyipseity` 확인 후 설치 → Enable

---

### 3.2 Terminal 프로필 설정

1. `Plugins > Terminal > Options` 클릭
2. "Profiles" 메뉴에서 `darwinIntegratedDefault` 외 제거
3. 왼쪽 사이드바에 생긴 📟 아이콘 클릭 → 해당 프로필 선택

> `pwd` 명령어로 경로 출력되면 정상 작동

---

## 4. 환경 변수 문제 해결

터미널에서 `gemini` 명령어 인식 안 될 때!

### 4.1 Node 경로 찾기
\`\`\`bash
which node
\`\`\`
> 예: `/opt/homebrew/bin/node` → `/opt/homebrew/bin` 저장

### 4.2 `.zshrc` 편집

\`\`\`bash
nano ~/.zshrc
# 또는 VS Code 사용 시
code ~/.zshrc
\`\`\`

\`\`\`bash
# 파일 최상단에 추가
export PATH="/opt/homebrew/bin:$PATH"
\`\`\`

\`\`\`bash
# 저장하고 종료
Ctrl + X → Y → Enter
\`\`\`

Obsidian 완전 종료 후 재실행!

---

## 5. 실제 사용 예시

### 5.1 기본 테스트

\`\`\`bash
gemini
# → 프롬프트 창 출력
\`\`\`

\`\`\`text
안녕하세요. 테스트입니다.
\`\`\`

---

### 5.2 파일과 함께 작업

1. Obsidian에서 `.md` 파일 생성
2. 우클릭 → `Copy path`
3. 터미널에서 아래 실행

\`\`\`bash
gemini "이 파일을 읽고 각 항목에 대한 정보를 추가해주세요: /Users/username/Obsidian/ai-glasses.md"
\`\`\`

---

### 5.3 고급 명령 예시

**제목 추천:**
\`\`\`bash
gemini "이 파일의 내용으로 적절한 제목을 제안해주세요: /path/to/file.md"
\`\`\`

**주제 분류:**
\`\`\`bash
gemini "이 폴더의 모든 마크다운 파일을 주제별로 분류해주세요: /path/to/folder/"
\`\`\`

**보고서 작성:**
\`\`\`bash
gemini "이 자료들을 바탕으로 종합적인 연구 보고서를 작성해주세요: file1.md file2.md file3.md"
\`\`\`

---

## 6. 자주 발생하는 문제 해결

| 문제 | 해결 방법 |
|------|------------|
| `gemini: command not found` | Node.js & 환경변수 확인 |
| API 키 오류 | 다시 생성하거나 따옴표로 감싸기 |
| 터미널이 안 열림 | Terminal 플러그인 활성화 여부 확인 |
| 한글 깨짐 | UTF-8 인코딩 설정 |

---

## 7. 효율적인 사용 팁

### ✅ 이렇게 쓰면 좋아요!

- **구체적인 요청**: "파일 수정해줘" ❌ → "각 제품에 출시일 추가해줘" ✅  
- **경로 정확히**: 파일/폴더 경로 복사 시 공백은 \`"\`로 감싸기  
- **단계별 작업**: 세부 작업을 나눠서 요청  

### 추천 워크플로우

1. Obsidian에서 **기초 아이디어 정리**
2. Gemini로 **자료 수집 및 추가**
3. AI로 **문단 구성 & 서론/결론 생성**
4. 최종적으로 **다듬고 스타일링**

---

## 8. 마무리 및 다음 단계

이제 Obsidian과 Gemini CLI를 통해 **AI와 함께 글쓰기, 연구, 정리**까지 가능합니다!  

🎯 **다음 추천**  
- 커맨드 alias 지정으로 자주 쓰는 명령 자동화  
- `Claude`, `ChatGPT API`, `Python Script` 연동  
- 다른 팀원들과 공유 가능한 자동화 템플릿 만들기  

---

즐거운 Obsidian + AI 라이프 되세요! 🚀