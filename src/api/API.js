import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5c105cec-09dc-4359-b3a9-64baf5deeb37'
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUsers(user_id){
        return instance.delete(`follow/${user_id}`).then(response => response.data)
    },
    followUsers(user_id){
        return instance.post(`follow/${user_id}`).then(response => response.data)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please, use profileAPI object instead')
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
    getProfile(userId){
        return (instance
      .get(`profile/${userId}`)
      )},
    getStatus(userId){
        return (instance
            .get(`profile/status/${userId}`))
    },
    updateStatus(status){
        return (instance
            .put(`profile/status`, {
                status : status
            }))
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    },
}