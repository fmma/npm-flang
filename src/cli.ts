import '@fmma-npm/frelude';
import { command } from '@fmma-npm/commander';

command(require('../package.json'))
    .run(opts => {
        console.log('NOT IMPLEMENTED YET')
    })
    .exec();