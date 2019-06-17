import { Message } from "./Message";
import { Contact } from "./Contact";
import { Chat } from "./Chat";

export class ChatSummary {

    message: Message;

    contact: Contact;

    chat: Chat;

    serverId: number;
    deviceId: number;
    status: number;

    content: string;
    nonReadMessages: number;
    organizationTo: string;
    organizationFrom: string;

    createdAt: Date;
    updatedAt: Date;

    chatParticipantIsImportant: boolean;

    typeChat: number;
    readOnly: boolean;


    constructor(build) {
        if (typeof build.message != "undefined" && build.message != null) {
            this.message = new Message(build.contactFrom);
        } else {
            this.message = null;
        }
        if (typeof build.contact != "undefined" && build.contact != null) {
            this.contact = new Contact(build.contact);
        } else {
            this.contact = null;
        }
        if (typeof build.chat != "undefined" && build.chat != null) {
            this.chat = new Chat(build.chat);
        } else {
            this.chat = null;
        }

        this.readOnly = build.readOnly;

        if (build.createdAt != new Date(0) && build.createdAt != null) {
            this.createdAt = new Date(build.createdAt);
        } else {
            this.createdAt = null;
        }

        if (build.updatedAt != new Date(0) && build.updatedAt != null) {
            this.updatedAt = new Date(build.updatedAt);
        } else {
            this.updatedAt = null;
        }

        this.serverId = build.serverId;
        this.deviceId = build.deviceId;

        this.content = build.content;
        this.nonReadMessages = build.nonReadMessages;
        this.organizationTo = build.organizationTo;
        this.organizationFrom = build.organizationFrom;

        this.status = build.status;

        this.typeChat = build.typeChat;

        this.chatParticipantIsImportant = build.chatParticipantIsImportant
    }

    static get Builder() {
        class Builder {

            message: Message;

            contact: Contact;

            chat: Chat;

            serverId: number;
            deviceId: number;
            status: number;

            content: string;
            nonReadMessages: number;

            organizationTo: string;
            organizationFrom: string;

            createdAt: Date;
            updatedAt: Date;

            chatParticipantIsImportant: boolean;

            typeChat: number;

            readOnly: boolean;

            constructor() { }

            public withMessage(message: Message) {
                if (typeof message != "undefined" && message != null) {
                    this.message = new Message(message);
                } else {
                    this.message = null;
                }
                return this;
            }

            public withContact(contact: Contact) {
                if (typeof contact != "undefined" && contact != null) {
                    this.contact = new Contact(contact);
                } else {
                    this.contact = null;
                }
                return this;
            }

            withReadOnly(readOnly: boolean) {
                this.readOnly = readOnly;
                return this;
            }

            public withChat(chat: Chat) {
                if (typeof chat != "undefined" && chat != null) {
                    this.chat = new Chat(chat);
                } else {
                    this.chat = null;
                }
                return this;
            }

            public withCreatedAt(createdAt: Date) {
                if (createdAt != new Date(0) && createdAt != null) {
                    this.createdAt = new Date(createdAt);
                } else {
                    this.createdAt = null;
                }

                return this;
            }

            public withUpdatedAt(updatedAt: Date) {
                if (updatedAt != new Date(0) && updatedAt != null) {
                    this.updatedAt = new Date(updatedAt);
                } else {
                    this.updatedAt = null;
                }

                return this;
            }

            public withServerId(serverId: number) {
                this.serverId = serverId;
                return this;
            }

            public withDeviceId(deviceId: number) {
                this.deviceId = deviceId;
                return this;
            }

            public withContent(content: string) {
                this.content = content;
                return this;
            }

            public withNonReadMessages(nonReadMessages: number) {
                this.nonReadMessages = nonReadMessages;
                return this;
            }

            public withOrganizationTo(organizationTo: string) {
                this.organizationTo = organizationTo;
                return this;
            }

            public withOrganizationFrom(organizationFrom: string) {
                this.organizationFrom = organizationFrom;
                return this;
            }

            public withStatus(status: number) {
                this.status = status;
                return this;
            }

            public withTypeChat(typeChat: number) {
                this.typeChat = typeChat;
                return this;
            }

            public withChatParticipantIsImportant(chatParticipantIsImportant: boolean) {
                this.chatParticipantIsImportant = chatParticipantIsImportant;
                return this;
            }

            build() {
                return new ChatSummary(this);
            }
        }

        return Builder;
    }
}