<template>

    <div class="uk-grid pk-grid-large pk-width-sidebar-large uk-form-stacked" data-uk-grid-margin>
        <div class="pk-width-content">

            <div class="uk-form-row">
                <input class="uk-width-1-1 uk-form-large" type="text" name="page[title]" :placeholder="'Enter Title' | trans" v-model="page.title" v-validate:required lazy>

                <div class="uk-form-help-block uk-text-danger" v-show="form['page[title]'].invalid">{{ 'Title cannot be blank.' | trans }}</div>
            </div>

            <div class="uk-form-row">
                <v-editor :value.sync="page.content" :options="{markdown : page.data.markdown}"></v-editor>
                <p>
                    <label><input type="checkbox" v-model="page.data.markdown"> {{ 'Enable Markdown' | trans }}</label>
                </p>
            </div>

        </div>
        <div class="pk-width-sidebar">

            <div class="uk-panel">

                <div class="uk-form-row">
                    <label for="form-menu-title" class="uk-form-label">{{ 'Menu Title' | trans }}</label>
                    <div class="uk-form-controls">
                        <input id="form-menu-title" class="uk-form-width-large" type="text" v-model="node.title">
                    </div>
                </div>

                <div class="uk-form-row">
                    <label for="form-slug" class="uk-form-label">{{ 'Slug' | trans }}</label>
                    <div class="uk-form-controls">
                        <input id="form-slug" class="uk-form-width-large" type="text" v-model="node.slug">
                    </div>
                </div>

                <div class="uk-form-row">
                    <label for="form-status" class="uk-form-label">{{ 'Status' | trans }}</label>
                    <div class="uk-form-controls">
                        <select id="form-status" class="uk-form-width-large" v-model="node.status">
                            <option value="0">{{ 'Disabled' | trans }}</option>
                            <option value="1">{{ 'Enabled' | trans }}</option>
                        </select>
                    </div>
                </div>

                <div class="uk-form-row">
                    <label for="form-status" class="uk-form-label">{{ 'Content Background' | trans }}</label>
                    <div class="uk-form-controls">
                        <select class="uk-form-width-large" v-model="node.theme.main.class.color">
                            <option value="">Default</option>
                            <option value="uk-section-primary">Primary</option>
                            <option value="uk-section-secondary">Secondary</option>
                            <option value="uk-section-default">Default</option>
                            <option value="uk-section-muted">Muted</option>
                        </select>
                    </div>
                </div>

                <div class="uk-form-row">
                    <label for="form-status" class="uk-form-label">{{ 'Content Size' | trans }}</label>
                    <div class="uk-form-controls">
                        <select class="uk-form-width-large" v-model="node.theme.main.class.size">
                            <option value="">Default</option>
                            <option value="uk-section-xsmall">uk-section-xsmall</option>
                            <option value="uk-section-small">uk-section-small</option>
                            <option value="uk-section-large">uk-section-large</option>
                            <option value="uk-section-xlarge">uk-section-xlarge</option>
                            <option value="uk-padding-remove-vertical">uk-padding-remove-vertical</option>
                        </select>
                    </div>
                </div>

                <div class="uk-form-row">
                    <label for="form-status" class="uk-form-label">{{ 'Image' | trans }}</label>
                    <div class="uk-form-controls">
                        <input-image :source.sync="node.theme.main.image"></input-image>
                    </div>
                </div>

                <div class="uk-form-row">
                    <label for="form-status" class="uk-form-label">{{ 'Components' | trans }}</label>
                    <div class="uk-form-controls">
                        <input type="text" class="uk-width-1-1" v-model="node.theme.main.component">
                    </div>
                </div>

                <div class="uk-form-row">
                    <label for="form-status" class="uk-form-label">{{ 'Other Class' | trans }}</label>
                    <div class="uk-form-controls">
                        <input type="text" class="uk-width-1-1" v-model="node.theme.main.otherClass">
                    </div>
                </div>

                <div class="uk-form-row">
                    <span class="uk-form-label">{{ 'Restrict Access' | trans }}</span>
                    <div class="uk-form-controls uk-form-controls-text">
                        <p v-for="role in roles" class="uk-form-controls-condensed">
                            <label><input type="checkbox" :value="role.id" v-model="node.roles" number> {{ role.name }}</label>
                        </p>
                    </div>
                </div>

                <div class="uk-form-row">
                    <span class="uk-form-label">{{ 'Page Settings' | trans }}</span>
                    <div class="uk-form-controls uk-form-controls-text">
                        <label><input type="checkbox" value="center-content" v-model="node.theme.main.title"> {{ 'Hide title' | trans }}</label>
                    </div>
                    <div class="uk-form-controls uk-form-controls-text">
                        <label><input type="checkbox" value="center-content" v-model="node.theme.main.content"> {{ 'Hide content' | trans }}</label>
                    </div>
                </div>

                <div class="uk-form-row">
                    <span class="uk-form-label">{{ 'Menu' | trans }}</span>
                    <div class="uk-form-controls uk-form-controls-text">
                        <label><input type="checkbox" value="center-content" v-model="node.data.menu_hide"> {{ 'Hide in menu' | trans }}</label>
                    </div>
                </div>

            </div>

        </div>
    </div>

</template>

<script>
module.exports = {
    props: ['node', 'roles', 'form' , 'config'],

    section:{
        label:'Content',
        priority:0
    },

    data: function () {
        return {
            page: {
                data: {title: true}
            }
        };
    },

    ready: function () {

        if (!this.node.id) this.node.status = 1;

    },

    events: {

        save: function (data) {
            data.page = this.page;

            if (!this.node.title) {
                this.node.title = this.page.title;
            }
        }

    },

    watch: {

        'node.data.defaults.id': {

            handler: function (id) {

                if (id) {
                    this.$http.get('api/site/page{/id}', {id: id}).then(function (res) {
                        this.$set('page', res.data);
                    });
                }

            },

            immediate: true

        }

    }
}
window.Site.components['page:settings'] = module.exports;
</script>
