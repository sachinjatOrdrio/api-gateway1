// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { v4 as uuidv4 } from 'uuid';
// import {
//   ClientProxy,
//   ClientProxyFactory,
//   Transport,
// } from '@nestjs/microservices';
// import { Observable } from 'rxjs';
// import { QueuesEnum } from 'src/common/enums';

// @Injectable()
// export class OrdrioSwipeService {
//   private client: ClientProxy;

//   constructor(private readonly configService: ConfigService) {
//   }

//    createBasicToken(username, password){
//     const credentials = Buffer.from(`${username}:${password}`).toString('base64');
//     return `Basic ${credentials}`;
//   };

//   async createSubAccount(req, res) {

//     const {
//       email,
//       phone,
//       rootAccount,
//       type = 'route',
//       legal_business_name,
//       location_id,
//       location,
//       percentage,
//       contact_name,
//       legal_info,
//       profile,
//       ref,
//     } = req.body;

//    const db = await getDB();

//     try {
//       if (email && phone && legal_business_name && contact_name) {
//         if (true) {
//           let data = JSON.stringify({
//             email: email,
//             phone: phone,
//             type: 'route',
//             reference_id: (ref + '-' + uuidv4()).slice(0, 20),
//             legal_business_name: legal_business_name,
//             business_type: 'partnership',
//             contact_name: contact_name,
//             profile: {
//               category: 'ecommerce',
//               subcategory: 'ecommerce_marketplace',
//               addresses: {
//                 registered: {
//                   street1: profile.addresses.registered.street1,
//                   street2: profile.addresses.registered.street2,
//                   city: profile.addresses.registered.city,
//                   state: profile.addresses.registered.state,
//                   postal_code: profile.addresses.registered.postal_code,
//                   country: profile.addresses.registered.country,
//                 },
//               },
//             },
//             // legal_info: {
//             //   pan: legal_info?.pan,
//             //   gst: legal_info?.gst,
//             // },
//           });

//           // return data;

//           const username = this.configService.get('RAZOR_USERNAME');
//           const password = this.configService.get('RAZOR_PASSWORD');

//           const authHeader = await this.createBasicToken(username, password);

//           let osAccountSavedData = {};

//           const isExist = await db.collection('ordrio-swipe-accounts').findOne({
//             ref: ref,
//             $or: [
//               { email: email },
//               {
//                 phone: phone,
//               },
//             ],
//           });

//           if (isExist) {
//             osAccountSavedData.insertedId = isExist?._id;
//           } else {
//             osAccountSavedData = await db
//               .collection('ordrio-swipe-accounts')
//               .insertOne({
//                 account_id: '',
//                 rootAccount: rootAccount ? rootAccount : false,
//                 location_id: location_id,
//                 percentage: parseFloat(percentage),
//                 location: location,
//                 email: email,
//                 phone: phone,
//                 contact_name: contact_name,
//                 legal_info: legal_info,
//                 ref: ref,
//                 status: 0, // pending
//                 created_at: new Date(),
//                 updated_at: new Date(),
//               });
//           }

//           let config = {
//             method: 'post',
//             maxBodyLength: Infinity,
//             url: 'https://api.razorpay.com/v2/accounts',
//             headers: {
//               'Content-type': 'application/json',
//               Authorization: authHeader,
//             },
//             data: data,
//           };

//           try {
//             const result = await axios.request(config);

//             if (result?.data?.id) {
//               await db.collection('ordrio-swipe-accounts').updateOne(
//                 { _id: new ObjectID(osAccountSavedData.insertedId) },
//                 {
//                   $set: {
//                     account_id: result?.data?.id,
//                     reference_id: result?.data?.reference_id,
//                     status: 1, // approved
//                     updated_at: new Date(),
//                   },
//                 }
//               );

//               // data = JSON.stringify({
//               //   name: contact_name,
//               //   email: email,
//               //   percentage_ownership: percentage_ownership
//               //     ? parseFloat(percentage_ownership)
//               //     : 0,
//               //   phone: {
//               //     primary: parseInt(phone),
//               //   },
//               //   addresses: {
//               //     residential: {
//               //       street: profile.addresses.registered.street1,
//               //       city: profile.addresses.registered.city,
//               //       state: profile.addresses.registered.state,
//               //       postal_code: profile.addresses.registered.postal_code,
//               //       country: profile.addresses.registered.country,
//               //     },
//               //   },
//               //   kyc: {
//               //     pan: legal_info?.pan,
//               //   },
//               //   notes: {
//               //     random_key: '',
//               //   },
//               // });

//               // return result.data;

//               // config = {
//               //   method: 'post',
//               //   maxBodyLength: Infinity,
//               //   url: `https://api.razorpay.com/v2/accounts/${result?.data?.id}/stakeholders`,
//               //   headers: {
//               //     'Content-type': 'application/json',
//               //     Authorization: authHeader,
//               //   },
//               //   data: data,
//               // };

//               // const stakeDetails = await axios.request(config);

//               // return { dasdsads: stakeDetails.data };

//               res.status(200).send({
//                 status: true,
//                 message: 'Account Created successfully.',
//                 errors: {},
//                 extra: {},
//                 data: { result: result?.data },
//                 date: new Date(),
//               });
//             } else {
//               res.status(400).send({
//                 status: false,
//                 message: 'Something went wrong !!!',
//                 errors: {},
//                 extra: {},
//                 data: { result: result.data },
//                 date: new Date(),
//               });
//             }
//             // return result.data;
//           } catch (error) {
//             console.log(error);
//             await db.collection('ordrio-swipe-accounts').updateOne(
//               { _id: new ObjectID(osAccountSavedData.insertedId) },
//               {
//                 $set: {
//                   status: 2, // failed
//                   updated_at: new Date(),
//                 },
//               }
//             );
//             res.status(400).send({
//               status: false,
//               message: 'Account already created or something went wrong!!!',
//               errors: { error: error.toString() },
//               extra: {},
//               data: {},
//               date: new Date(),
//             });
//           }
//         } else {
//           res.status(400).send({
//             status: false,
//             message: "Please provide Legal information's!!!",
//             errors: {},
//             extra: {},
//             data: {},
//             date: new Date(),
//           });
//         }
//       } else {
//         res.status(400).send({
//           status: false,
//           message: 'Please provide all required fields',
//           errors: {},
//           extra: {},
//           data: {},
//           date: new Date(),
//         });
//       }
//     } catch (error) {
//       res.status(500).send({
//         status: false,
//         message: 'Something went wrong!!!',
//         errors: {
//           error: error.toString(),
//         },
//         extra: {},
//         data: {},
//         date: new Date(),
//       });
//     }
//   }
// }
