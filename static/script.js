document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // 폼 제출 동작을 중지

    // 사용자가 입력한 정보 가져오기
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 데이터를 JSON 형식으로 만듭니다.
    const data = {
        id: username,
        password: password
    };

    // FastAPI 서버로 데이터를 보냅니다.
    fetch('/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => { 
        if (response.ok) {
            return response.json();
        } else {
            window.alert("로그인에 실패하였습니다!");
            throw new Error('서버 응답이 실패했습니다!');
            
        }
    })
    .then(data => {
        window.alert("로그인에 성공하였습니다!");
    })
    .catch(error => {
        console.error(error);
    });

    // 이후 로그인 로직 또는 서버로 정보 전송을 구현할 수 있음
});
