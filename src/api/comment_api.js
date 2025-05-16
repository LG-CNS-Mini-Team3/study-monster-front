const API_BASE_URL = "http://localhost:8080/comment"

export const createComment = (body) => {
    const res = fetch(API_BASE_URL + "/add", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    })
    const data = res.json
    return data
}

export const listComment = async (num) => {
    const res = await fetch(API_BASE_URL + "/list?board="+num, {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json()
    return data
}