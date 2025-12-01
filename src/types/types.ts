import type { FormKitSchemaNode } from "@formkit/core";

export interface Survey {
  title: string;
  path: string;
  surveyConfig: SurveyConfig[];
  props: Record<string, Card>;
}

interface SurveyConfig {
  name: string;
  url: string;
}

export interface Card {
  title: string;
  schema: FormKitSchemaNode[];
}
