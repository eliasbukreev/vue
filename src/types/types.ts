import type { FormKitSchemaNode } from "@formkit/core";
import type { Component } from "vue";

export interface TabItem {
  name: string;
  component: Component;
  schema?: FormKitSchemaNode[];
  props?: Record<string, string[]>;
}

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
