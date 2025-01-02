
const BaseRepository = require('../../../db/baseRepository');
const { ObjectID } = require('mongodb');
class ContactRepository extends BaseRepository {

  constructor() {
    super('contacts');
  }

    // get all users
    getAllUsers(page, size ) {
      const limit = parseInt(size);
      const skip = parseInt(page - 1) * size;
  
      return this.dbClient 
        .then(db => db
          .collection(this.collection)
          .aggregate([
            {
  
              $group:
              {
                _id: "$_id",
                name: { $first: "$name" },
                email: { $first: "$email" },
                subject: { $first: "$subject" },
                message: { $first: "$message" },
                is_verified: {$first:"$is_verified"}
              }
            },
            
            { $sort: { name: 1 }}
          ])
          .skip(skip)
          .limit(limit)
          .toArray()
        )     
        
        .then(data => {
         return data;
        });
    }



    soft_delete(id) {
      const date = new Date();
          if (id) {
            return this.dbClient
              .then(db => db
                .collection(this.collection)
                .updateOne({ _id: ObjectID(id) },
                  { $set: { is_verified: false ,  updated_at: date , deleted_at: date } })
              )
          } else {
            return 'Invalid user';
          }
       
    }


    
}

module.exports = ContactRepository;
