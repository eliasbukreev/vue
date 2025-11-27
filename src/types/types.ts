import type { FormKitSchemaNode } from "@formkit/core";
import type { Component } from "vue";

export interface TabItem {
  name: string;
  component: Component;
  schema?: FormKitSchemaNode[];
  props?: Record<string, string[]>;
}
