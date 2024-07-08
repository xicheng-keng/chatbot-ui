import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  //GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_AZ = 'gpt-35-turbo',
  //GPT_4 = 'gpt-4',
  //GPT_4_32K = 'gpt-4-32k',
  // GPT_3_5_AZ_16K = 'gpt-35-turbo-16k',
  GPT_4_AZ = 'gpt-4',
  // GPT_4_AZ_32K = 'gpt-4-32k',
  GPT_4o_AZ = 'gpt-4o',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_4o_AZ;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  //[OpenAIModelID.GPT_3_5]: {
  //  id: OpenAIModelID.GPT_3_5,
  //  name: 'GPT-3.5',
  //  maxLength: 900000,
  //  tokenLimit: 300000,
  //},
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  //[OpenAIModelID.GPT_4]: {
  //  id: OpenAIModelID.GPT_4,
  //  name: 'GPT-4',
  //  maxLength: 24000,
  //  tokenLimit: 8000,
  //},
  //[OpenAIModelID.GPT_4_32K]: {
  //  id: OpenAIModelID.GPT_4_32K,
  //  name: 'GPT-4-32K',
  //  maxLength: 96000,
  //  tokenLimit: 32000,
  //},
  // [OpenAIModelID.GPT_3_5_AZ_16K]: {
  //   id: OpenAIModelID.GPT_3_5_AZ_16K,
  //   name: 'GPT-3.5-16k',
  //   maxLength: 48000,
  //   tokenLimit: 16384,
  // },
  [OpenAIModelID.GPT_4_AZ]: {
    id: OpenAIModelID.GPT_4_AZ,
    name: 'GPT-4-vision-preview',
    maxLength: 90000,
    tokenLimit: 30000,
  },
  // [OpenAIModelID.GPT_4_AZ_32K]: {
  //   id: OpenAIModelID.GPT_4_AZ_32K,
  //   name: 'GPT-4-32k',
  //   maxLength: 96000,
  //   tokenLimit: 32000,
  // },
  [OpenAIModelID.GPT_4o_AZ]: {
    id: OpenAIModelID.GPT_4o_AZ,
    name: 'GPT-4o',
    maxLength: 1350000,
    tokenLimit: 450000,
  },

};
