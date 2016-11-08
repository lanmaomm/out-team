import crypto from 'crypto';
const csrfSettings = 'react node app';

export default function genToken(timestamp){
    timestamp = timestamp || +new Date;
    let shasum = crypto.createHash('sha1');
    shasum.update([ timestamp, timestamp ].join(csrfSettings.secret));
    let csrf = shasum.digest('hex');
    return  {csrf: csrf, timestamp: timestamp};
}
