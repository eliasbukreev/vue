import { organisation } from "../../data/01-organisation";
import { documentation } from "../../data/02-documentation";
import { getCommmitteeSchema } from "../../data/03-сommittee";
import { cryptographic } from "../../data/04-cryptographic";
import { journals } from "../../data/05-journals";
import { instructions } from "../../data/06-instructions";
import { orgblock } from "../../data/08-orgblock";
import { regulations } from "../../data/09-regulations";
import type { Survey } from "../../types/types";

export const PeriodicControl: Survey = {
  title: "Периодический контроль",
  path: "/periodic-control/",
  surveyConfig: [
    {
      name: "Организационно - распорядительная документация",
      url: "organisation",
    },
    { name: "Документарный блок", url: "documentation" },
    { name: "Комиссии", url: "commitee" },
    { name: "Средства защиты", url: "cryptographic" },
    { name: "Журналы", url: "journals" },
    { name: "Инструкции", url: "instructions" },
    { name: "Прикладной блок", url: "arms" },
    { name: "Организационный блок", url: "orgblock" },
    { name: "Процесс ознакомления сотрудников с ОРД", url: "regulations" },
  ],
  props: {
    organisation: {
      title: "Организационно - распорядительная документация",
      schema: organisation,
    },
    documentation: { title: "Документарный блок", schema: documentation },
    cryptographic: { title: "Средства защиты", schema: cryptographic },
    journals: { title: "Журналы", schema: journals },
    instructions: { title: "Инструкции", schema: instructions },
    orgblock: { title: "Организационный блок", schema: orgblock },
    regulations: {
      title: "Процесс ознакомления сотрудников с ОРД",
      schema: regulations,
    },
  },
};

export const PeriodicControlCommitee: Survey = {
  title: "Комиссии",
  path: "/periodic-control/commitee/",
  surveyConfig: [
    {
      name: "Состав комиссии по уничтожению персональных данных",
      url: "pdn-destruction",
    },
    { name: "Состав комиссии по уничтожению СКЗИ", url: "crypto-destruction" },
    {
      name: "Состав комиссии по реагированию на инциденты ИБ",
      url: "incident-response",
    },
    { name: "Перечень лиц, допущенных к обработке ПДн", url: "pdn-access" },
    { name: "Перечень лиц, допущенных к работе с СКЗИ", url: "crypto-access" },
    { name: "Перечень лиц, допущенных к работе в ИС", url: "is-access" },
  ],
  props: {
    "pdn-destruction": {
      title: "Организационно - распорядительная документация",
      schema: getCommmitteeSchema(
        "Организационно - распорядительная документация",
      ),
    },
    "crypto-destruction": {
      title: "Состав комиссии по уничтожению СКЗИ",
      schema: getCommmitteeSchema("Состав комиссии по уничтожению СКЗИ"),
    },
    "incident-response": {
      title: "Состав комиссии по реагированию на инциденты ИБ",
      schema: getCommmitteeSchema(
        "Состав комиссии по реагированию на инциденты ИБ",
      ),
    },
    "pdn-access": {
      title: "Перечень лиц, допущенных к обработке ПДн",
      schema: getCommmitteeSchema("Перечень лиц, допущенных к обработке ПДн"),
    },
    "crypto-access": {
      title: "Перечень лиц, допущенных к работе с СКЗИ",
      schema: getCommmitteeSchema("Перечень лиц, допущенных к работе с СКЗИ"),
    },
    "is-access": {
      title: "Перечень лиц, допущенных к работе в ИС",
      schema: getCommmitteeSchema("Перечень лиц, допущенных к работе в ИС"),
    },
  },
};
