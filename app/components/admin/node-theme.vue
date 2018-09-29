<template lang="html">
    <section class="uk-grid pk-grid-large pk-width-sidebar-large uk-form-stacked" data-uk-grid-margin>

        <div class="pk-width-content">

            <div class="uk-form-row">
                <v-editor :value.sync="node.theme.hero.main.content" :options="{markdown : false}"></v-editor>
            </div>

        </div>

        <div class="pk-width-sidebar">

            <div class="uk-form-row">
                <label for="form-status" class="uk-form-label">{{ 'Status' | trans }}</label>
                <div class="uk-form-controls">
                    <select id="form-status" class="uk-form-width-large" v-model="node.theme.hero.is">
                        <option value="0">{{ 'Disabled' | trans }}</option>
                        <option value="1">{{ 'Enabled' | trans }}</option>
                    </select>
                </div>
            </div>

            <div class="uk-form-row">
                <label for="form-status" class="uk-form-label">{{ 'Image' | trans }}</label>
                <div class="uk-form-controls">
                    <input-image :source.sync="node.theme.hero.header.style.image"></input-image>
                </div>
            </div>

            <div class="uk-form-row">
                <label for="form-status" class="uk-form-label">{{ 'Background' | trans }}</label>
                <div class="uk-form-controls">
                    <select class="uk-form-width-large" v-model="node.theme.hero.header.class.background">
                        <option value="uk-background-primary">Primary</option>
                        <option value="uk-background-secondary">Secondary</option>
                        <option value="uk-background-default">Default</option>
                        <option value="uk-background-muted">Muted</option>
                    </select>
                </div>
            </div>

            <div class="uk-form-row">
                <label for="form-status" class="uk-form-label">{{ 'Other Class' | trans }}</label>
                <div class="uk-form-controls">
                    <input type="text" class="uk-width-1-1" v-model="node.theme.hero.header.class.otherClass">
                </div>
            </div>

            <hr />

            <div class="uk-form-row">
                <label for="form-status" class="uk-form-label">{{ 'Main Height' | trans }}</label>
                <div class="uk-form-controls">
                    <select class="uk-form-width-large" v-model="node.theme.hero.main.class.height">
                        <option value="">Default</option>
                        <option value="uk-height-1-1">Height-1-1</option>
                        <option value="uk-height-small">Height-small</option>
                        <option value="uk-height-max-small">Height-max-small</option>
                        <option value="uk-height-medium">Height-medium</option>
                        <option value="uk-height-large">Height-large</option>
                        <option value="uk-height-max-large">Height-max-large</option>
                        <option value="uk-height-viewport">Height-viewport</option>
                    </select>
                </div>
            </div>

            <div class="uk-form-row">
                <label for="form-status" class="uk-form-label">{{ 'Main Other Class' | trans }}</label>
                <div class="uk-form-controls">
                    <input type="text" class="uk-width-1-1" v-model="node.theme.hero.main.class.otherClass">
                </div>
            </div>

        </div>

    </section>
</template>

<script>
module.exports = {
    props: ['config' , 'node'],
    section:{
        label:'Hero',
        priority:80
    }
}
window.Site.components['node-theme'] = module.exports;
</script>
