import { Contact } from "./Contact";

export class ChatSummaryFilter {

  /**
   * Filtro de Assunto da Conversa
   */
  // String
  subject: string;

  // Contact
  contactFrom: Contact;

  contactTo: Contact;

  participant: Contact;

  // Date
  periodStart: Date;

  periodEnd: Date;

  periodDueStart: Date;

  periodDueEnd: Date;

  // Number
  messageStatus: number;

  messageStatusPeriod: number;

  closedStatus: number;

  type: number;

  // Boolean
  readOnly: boolean;

  important: boolean;

  hasDue: boolean;

  // Any

  organization: any;

  constructor(build) {
    this.subject = build.subject;

    this.organization = build.organization;

    if (build.contactFrom != "undefined" && build.contactFrom != null) {
      this.contactFrom = new Contact(build.contactFrom);
    } else {
      this.contactFrom = null;
    }

    if (build.organization != "undefined" && build.organization != null) {
      this.organization = new Contact(build.organization);
    } else {
      this.organization = null;
    }

    if (build.contactTo != "undefined" && build.contactTo != null) {
      this.contactTo = new Contact(build.contactTo);
    } else {
      this.contactTo = null;
    }

    if (build.participant != "undefined" && build.participant != null) {
      this.participant = new Contact(build.participant);
    } else {
      this.participant = null;
    }

    if (build.periodStart != new Date(0) && build.periodStart != null) {
      this.periodStart = new Date(build.periodStart);
    } else {
      this.periodStart = null;
    }

    if (build.periodEnd != new Date(0) && build.periodEnd != null) {
      this.periodEnd = new Date(build.periodEnd);
    } else {
      this.periodEnd = null;
    }

    if (build.periodDueStart != new Date(0) && build.periodDueStart != null) {
      this.periodDueStart = new Date(build.periodDueStart);
    } else {
      this.periodDueStart = null;
    }

    if (build.periodDueEnd != new Date(0) && build.periodDueEnd != null) {
      this.periodDueEnd = new Date(build.periodDueEnd);
    } else {
      this.periodDueEnd = null;
    }

    this.messageStatus = build.messageStatus;
    this.messageStatusPeriod = build.messageStatusPeriod;
    this.closedStatus = build.closedStatus;
    this.type = build.type;
    this.readOnly = build.readOnly;
    this.important = build.important;
    this.hasDue = build.hasDue;
  }

  static get Builder() {
    class Builder {
      /**
       * Filtro de Assunto da Conversa
       */
      subject: string;

      contactFrom: Contact;

      contactTo: Contact;

      participant: Contact;

      // 
      periodStart: Date;

      periodEnd: Date;

      periodDueStart: Date;

      periodDueEnd: Date;

      //
      messageStatus: number;

      messageStatusPeriod: number;

      //
      closedStatus: number;

      type: number;

      important: boolean;
      hasDue: boolean;
      readOnly: boolean;

      organization: any;

      constructor() { }

      public withSubject(subject: string) {
        this.subject = subject;
        return this;
      }

      public withOrganization(organization: any) {
        if (organization != "undefined" && organization != null) {
          this.organization = new Contact(organization);
        } else {
          this.organization = null;
        }
        return this;
      }

      public withContactFrom(contactFrom: any) {
        if (contactFrom != "undefined" && contactFrom != null) {
          this.contactFrom = new Contact(contactFrom);
        } else {
          this.contactFrom = null;
        }
        return this;
      }

      public withContactTo(contactTo: any) {
        if (contactTo != "undefined" && contactTo != null) {
          this.contactTo = new Contact(contactTo);
        } else {
          this.contactTo = null;
        }
        return this;
      }

      withReadOnly(readOnly: boolean) {
        this.readOnly = readOnly;
        return this;
      }

      public withParticipant(participant: any) {
        if (participant != "undefined" && participant != null) {
          this.participant = new Contact(participant);
        } else {
          this.participant = null;
        }
        return this;
      }

      public withPeriodStart(periodStart: Date) {
        if (periodStart != new Date(0) && periodStart != null) {
          this.periodStart = new Date(periodStart);
        } else {
          this.periodStart = null;
        }
        return this;
      }

      public withPeriodEnd(periodEnd: Date) {
        if (periodEnd != new Date(0) && periodEnd != null) {
          this.periodEnd = new Date(periodEnd);
        } else {
          this.periodEnd = null;
        }
        return this;
      }

      public withPeriodDueStart(periodDueStart: Date) {
        if (periodDueStart != new Date(0) && periodDueStart != null) {
          this.periodDueStart = new Date(periodDueStart);
        } else {
          this.periodDueStart = null;
        }
        return this;
      }

      public withPeriodDueEnd(periodDueEnd: Date) {
        if (periodDueEnd != new Date(0) && periodDueEnd != null) {
          this.periodDueEnd = new Date(periodDueEnd);
        } else {
          this.periodDueEnd = null;
        }
        return this;
      }

      public withMessageStatus(messageStatus: number) {
        this.messageStatus = messageStatus;
        return this;
      }

      public withMessageStatusPeriod(messageStatusPeriod: number) {
        this.messageStatusPeriod = messageStatusPeriod;
        return this;
      }

      public withClosedStatus(closedStatus: number) {
        this.closedStatus = closedStatus;
        return this;
      }

      public withType(type: number) {
        this.type = type;
        return this;
      }

      public withImportant(important: boolean) {
        this.important = important;
        return this;
      }

      public withHasDue(hasDue: boolean) {
        this.hasDue = hasDue;
        return this;
      }

      build() {
        return new ChatSummaryFilter(this);
      }
    }
    return Builder;
  }
}