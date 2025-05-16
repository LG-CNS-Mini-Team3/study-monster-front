export function formatDateTime(isoString) {
    // Date 객체로 파싱
    const date = new Date(isoString);

    // 각 부분 추출 및 두 자리수로 맞춤
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월: 0부터 시작
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // 원하는 형식으로 조합
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}