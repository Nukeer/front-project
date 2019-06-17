export class UserConfiguration {

   rememberCredentials: boolean;

   constructor(build: any) {
      this.rememberCredentials = build.rememberCredentials;
   }

   static get Builder() {
      class Builder {

         rememberCredentials: boolean;

         constructor() { }

         withRememberCredentials(rememberCredentials: boolean) {
            this.rememberCredentials = rememberCredentials; return this;
         }
         build() {
            return new UserConfiguration(this);
         }
      }
      return Builder;
   }
}