/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 * 
 * All configuration options: https://remotion.dev/docs/config
 */

import {Config} from '@remotion/cli/config';

Config.setVideoImageFormat('png');
Config.setOverwriteOutput(true);
Config.setCodec("h264");
Config.setCrf(1);
Config.setX264Preset("veryslow")
Config.setBeepOnFinish(true)
