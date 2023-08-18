# Contribution guidelines

저희 프로젝트에 함께 해주세요 🙂</br>
<span style="color: #808080">아래 내용을 참고해주세요</span>

### 🍏 커밋 메시지 작성 방법

만약 패치가 API를 변경하거나 버그를 수정한다면, 커밋 제목에서 다음 중 하나의 접두사를 사용해주세요:

- `fix: ...`
- `feat: ...`
- `remove: ...`

무슨 문제가 있는지 설명하는 것이 아닌 작업 내용을 작성해주세요.

- `fix: close 버튼이 작동하지 않음`(X)
- `fix: close 버튼의 prop 이름 변경`(O)

🔗Conventional Commits에서 제시한 규칙을 따라주세요:

- fix 타입의 커밋은 코드베이스에서 버그를 수정합니다 (PATCH에 관련됨).

- feat 타입의 커밋은 코드베이스에 새로운 기능을 도입합니다 (MINOR에 관련됨).

- BREAKING CHANGE를 포함된 커밋은 API를 변경하는 변경 사항을 도입합니다 (MAJOR에 관련됨).

  - 타입/범위 뒤에 !를 추가하거나 푸터에 BREAKING CHANGE:를 포함한다.

  - 예시:

    ```
    feat!: 제품이 배송되면 고객에게 이메일 보내기
    ```

    ```
    feat: 제공된 설정 객체가 다른 설정 파일을 확장

    BREAKING CHANGE: 설정 파일의 `extends` 키는 이제 다른 설정 파일을 확장하는 데 사용
    ```

- fix:feat: 이외에도 build:, chore:, ci:, docs:, style:, refactor:, perf:, test:를 사용할 수 있습니다 (@commitlint/config-conventional 및 Angular 가이드 참조)

- 푸터는 추가 정보를 제공할 수 있으며, git trailer 형식과 유사한 규칙을 따릅니다.

  - 범위는 괄호로 감싸서 추가 컨텍스트를 제공할 수 있습니다.
  - 예시: feat(parser): 배열 파싱 기능 추가

### 🍉 템플릿

- [ISSUE](ko/ISSUE_TEMPLATE/bug_report_ko.md)
- [PULL REQUEST](ko/PULL_REQEUST_TEMPLATE_ko.md)

### 🍅 브랜치

`main / feature` 브랜치를 사용합니다.</br>
feature 브랜치의 경우, 영어 소문자와 하이픈(-)을 사용하여 특정 표현을 나타냅니다.

```
예시: feature/what-is-this-branch
```

(하이픈은 설명의 공백을 기반으로 합니다.)

추후 개발 및 핫픽스 브랜치가 필요에 맞게 사용할 예정.

### 🍇 제안

팀의 `Contribution guide`가 아직 완벽하지 않을 수 있으니,
ISSUES를 통해 자유롭게 개선사항을 제안해주세요:)
