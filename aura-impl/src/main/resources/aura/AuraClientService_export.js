/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*jslint sub: true */
exp(clientService,
    "initHost", clientService.initHost,
    "init", clientService.init,
    "initDefs", clientService.initDefs,
    "loadApplication", clientService.loadApplication,
    "loadComponent", clientService.loadComponent,
    "enqueueAction", clientService.enqueueAction,
    "runActions", clientService.runActions,
    "throwExceptionEvent", clientService.throwExceptionEvent,
    "resetToken", clientService.resetToken,
    "hardRefresh", clientService.hardRefresh,
    "setOutdated", clientService.setOutdated,
    "injectComponent", clientService.injectComponent,
    "isConnected", clientService.isConnected,
    "_initTransaction", clientService.registerTransaction
);
