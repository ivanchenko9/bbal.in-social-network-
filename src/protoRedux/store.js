import profileReducer from "./profileReducer"
import messagesReducer from "./messagesReducer"

let store = {
  _state: {
    profilePage:{
        postsData : [
            {
              id: 1,
              postTime: '19:42',
              postText:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum libero officiis culpa necessitatibus sed?',
            },
            {
              id: 2,
              postTime: '11:33',
              postText:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officiis culpa necessitatibus sed?',
            },
            {
              id: 3,
              postTime: '10:22',
              postText:
                'Lorem ipsum dolor sit amet consectetur culpa adipisicing elit. Sint officiis culpa necessitatibus sed?',
            },
          ],
          newPostText:''
    },
    messagesPage:{
        messagesData : [
            {
              id: 1,
              message__prof__photo:
                'https://pyxis.nymag.com/v1/imgs/847/0f7/504c63a03d8a751a5cbeda0bc064306bb4-lebron-james.rsquare.w1200.jpg',
              prof__name: 'LeBron James',
              message__date: '10:35',
              message__text:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita consequatur rem iste ipsa perferendis ab.',
            },
            {
              id: 2,
              message__prof__photo:
                'https://pyxis.nymag.com/v1/imgs/847/0f7/504c63a03d8a751a5cbeda0bc064306bb4-lebron-james.rsquare.w1200.jpg',
              prof__name: 'LeBron James',
              message__date: '11:47',
              message__text:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita consequatur rem iste ipsa perferendis ab .',
            },
            {
              id: 3,
              message__prof__photo:
                'https://pyxis.nymag.com/v1/imgs/847/0f7/504c63a03d8a751a5cbeda0bc064306bb4-lebron-james.rsquare.w1200.jpg',
              prof__name: 'LeBron James',
              message__date: '12:11',
              message__text:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit consequatur rem iste ipsa perferendis consequatur rem iste ipsa perferendis. Expedita consequatur rem iste ipsa perferendis ab.',
            },
            {
              id: 4,
              message__prof__photo:
                'https://pyxis.nymag.com/v1/imgs/847/0f7/504c63a03d8a751a5cbeda0bc064306bb4-lebron-james.rsquare.w1200.jpg',
              prof__name: 'LeBron James',
              message__date: '15:45',
              message__text:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita consequatur rem iste.',
            },
            {
              id: 5,
              message__prof__photo:
                'https://pyxis.nymag.com/v1/imgs/847/0f7/504c63a03d8a751a5cbeda0bc064306bb4-lebron-james.rsquare.w1200.jpg',
              prof__name: 'LeBron James',
              message__date: '19:35',
              message__text:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita consequatur rem iste ipsa perferendis ab.',
            }
          ],
          
        conversData : [
            {
              id: 1,
              convers__name: 'LeBron James',
              convers__photo:
                'https://pyxis.nymag.com/v1/imgs/847/0f7/504c63a03d8a751a5cbeda0bc064306bb4-lebron-james.rsquare.w1200.jpg',
            },
            {
              id: 2,
              convers__name: 'Ja Morant',
              convers__photo:
                'https://imagez.tmz.com/image/39/4by3/2020/06/29/39bad1be907c4fb18a7188f2d4c7859d_md.jpg',
            },
            {
              id: 3,
              convers__name: 'Damian Lilard',
              convers__photo:
                'https://i1.sndcdn.com/artworks-000302494296-mkciji-t500x500.jpg',
            },
            {
              id: 4,
              convers__name: 'Kawhi Leonard',
              convers__photo:
                'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ece9ac154a41200078140cf%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D2008%26cropX2%3D3048%26cropY1%3D169%26cropY2%3D1208',
            },
            {
              id: 5,
              convers__name: 'Stephen Curry',
              convers__photo:
                'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTM5OTQxMjg1NzA3MzkyMDQw/stephen-curry-gettyimages-538912798_1600jpg.jpg',
            }
            ],
            newMessageText:''
    }
  },
  _callSubscriber(){
  console.log('State was changed')
  },
  
  getState(){
    return this._state
  },
  subscribe(observer){
    this._callSubscriber = observer
  },

  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)

    this._callSubscriber(this._state);
  }
}

export default store
