// @ts-nocheck
import React, { memo  } from 'react';
import { Cloudinary } from 'meteor/socialize:cloudinary';

export const Profile = () => {

    const user = Meteor.user();

    if(!user)
        return null;

    const UserItem = memo(({ user }) => (
        <div className="border-t border-gray-700 pt-4 pb-3">
        <div className="flex items-center px-4">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" 
            src={Cloudinary.url(user.userImage)}
             alt="" />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-white">{user.profile.fullname}</div>
            <div className="text-sm font-medium text-gray-400">{"only from user.profile object..."}</div>
            <div className="text-sm font-medium text-gray-400">{""}</div>
          </div>
         
        </div>
        </div>
  )
)
return (
    
      
    <>
    <ul
      role="list"
      className="grid gap-4 pt-7 mt-5 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12"
  >
          {users.map((user) => (
              <UserItem key={user._id} user={user} />
          ))}
      </ul>
      </>
 

)
}
