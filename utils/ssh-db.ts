//import { Client } from 'ssh2';
//import { Pool } from 'pg';

//export async function connectViaSSHTunnel() {
//  const ssh = new Client();

//  return new Promise<Pool>((resolve, reject) => {
 //   ssh.on('ready', () => {
//      ssh.forwardOut('secapa-stg-instance.cja8ouiiyfty.ap-northeast-1.rds.amazonaws.com', 12345, 'dev_secapa', 5432, (err, stream) => {
 //       if (err) return reject(err);
//
  //      const pool = new Pool({
   //       user: 'postgres',
   //       password: 'SecapaPasswoRD',
   //       database: 'secapa',
   //o      stream: () => stream, // 🧠 Connect through the SSH stream
   //     });

   //     resolve(pool);
  //    });
  //  }).connect({
  //    host: '57.180.185.14',
   //   port: 22,
   //   username: 'ec2-user',
   //   //privateKey: require('fs').readFileSync('/Users/nguyettruong/Downloads/secapa-dev'),
//    });
 // });
//}
